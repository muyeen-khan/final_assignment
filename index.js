const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoose = require("mongoose");
const path = require("path");

const router = require("./routes/api.js");

const {
  MAX_JSON_SIZE,
  MONGODB_CONNECTION_STRING,
  PORT,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  URL_ENCODED,
  WEB_CACHE,
} = require("./app/config/config.js");
const app = express();

//global application middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
// Use Helmet to set CSP headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Default policy (applies to all resources)
      imgSrc: [
        "'self'", // Allow images from your own domain
        "data:", // Allow inline base64-encoded images
        "https://demo.themesberg.com", // Allow images from this domain
        "https://res.cloudinary.com", // Allow images from Cloudinary
        "https://i.imgur.com", // Allow images from Imgur
        "https://*.example.com", // Allow images from any subdomain of example.com
        "https://images.unsplash.com",
      ],
      scriptSrc: ["'self'"], // Restrict scripts to your domain
      styleSrc: ["'self'"], // Restrict styles to your domain
    },
  })
);
app.use(cookieParser());

app.use(
  fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 },
  })
);

//rate limiter
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  limit: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Web Caching
app.set("etag", WEB_CACHE);

// MongoDB connection
mongoose
  .connect(MONGODB_CONNECTION_STRING, { autoIndex: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

//set API routes
app.use("/api", router);

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, "client", "dist")));

// Catch-all route to serve index.html for React Router
app.use("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

//run express backend project
app.listen(PORT, () => {
  console.log(`app is running in ${PORT}`);
});

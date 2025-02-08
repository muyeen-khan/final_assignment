const MONGODB_CONNECTION_STRING =
  "mongodb+srv://muyeen:asdffdsa@muyeenscluster.qzyqc.mongodb.net/portfolio_assignment?retryWrites=true&w=majority&appName=muyeenscluster";

const JWT_SECRET =
  "5d2b2ccdda0995bf560f25baf32b9391dfc3f61574bde015465da21af4b2c115";
const JWT_EXPIRATION_TIME = 2592000;

const EMAIL_HOST = "mail.muyeenkhan.com";
const EMAIL_PORT = 465;
const EMAIL_USER = "mail@muyeenkhan.com";
const EMAIL_PASSWORD = "Muyeen@Khan80!";
const MAIL_ENCRYPTION = "ssl";

const MAX_JSON_SIZE = "5mb";
const URL_ENCODED = true;

const REQUEST_LIMIT_TIME = 900000;
const REQUEST_LIMIT_NUMBER = 3000;

const WEB_CACHE = false;
const PORT = 3000;

module.exports = {
  MONGODB_CONNECTION_STRING,
  JWT_SECRET,
  JWT_EXPIRATION_TIME,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  MAIL_ENCRYPTION,
  MAX_JSON_SIZE,
  URL_ENCODED,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  WEB_CACHE,
  PORT,
};

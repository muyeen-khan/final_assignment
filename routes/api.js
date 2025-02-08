const express = require("express");

const {
  ReadProfile,
  UserLogin,
  UserLogout,
} = require("../app/controllers/UserController.js");

const authMiddleware = require("../app/middlwares/authMiddleware.js");
const {
  createBlog,
  readBlogs,
  updateBlog,
  deleteBlog,
} = require("../app/controllers/BlogController.js");
const {
  createTeamMember,
  readTeamMembers,
  updateTeamMember,
  deleteTeamMember,
} = require("../app/controllers/TeamController.js");
const {
  createService,
  readServices,
  updateService,
  deleteService,
} = require("../app/controllers/ServiceController.js");

const router = express.Router();

//User Routes
router.get("/UserLogin/:email/:pass", UserLogin);
router.get("/UserLogout", authMiddleware, UserLogout);

//blog Routes
router.post("/CreateBlog", authMiddleware, createBlog);
router.get("/ReadBlogs", readBlogs);
router.post("/UpdateBlog/:id", authMiddleware, updateBlog);
router.delete("/DeleteBlog/:id", authMiddleware, deleteBlog);

// team member Routes
router.post("/CreateTeamMember", authMiddleware, createTeamMember);
router.get("/ReadTeamMembers", readTeamMembers);
router.post("/UpdateTeamMember/:id", authMiddleware, updateTeamMember);
router.delete("/DeleteTeamMember/:id", authMiddleware, deleteTeamMember);

//service Routes
router.post("/CreateService", authMiddleware, createService);
router.get("/ReadServices", readServices);
router.post("/UpdateService/:id", authMiddleware, updateService);
router.delete("/DeleteService/:id", authMiddleware, deleteService);

module.exports = router;

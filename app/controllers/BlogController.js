const {
  createBlogService,
  readBlogsService,
  updateBlogService,
  deleteBlogService,
} = require("../services/BlogServices");

exports.createBlog = async (req, res) => {
  let result = await createBlogService(req, res);
  return res.status(200).json(result);
};

exports.readBlogs = async (req, res) => {
  let result = await readBlogsService(req, res);
  return res.status(200).json(result);
};

exports.updateBlog = async (req, res) => {
  let result = await updateBlogService(req, res);
  return res.status(200).json(result);
};

exports.deleteBlog = async (req, res) => {
  let result = await deleteBlogService(req, res);
  return res.status(200).json(result);
};

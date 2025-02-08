const BlogModel = require("../models/BlogModel");
const mongoose = require("mongoose");

exports.createBlogService = async (req, res) => {
  try {
    let reqBody = req.body;
    let blog = await BlogModel.create(reqBody);
    if (blog) {
      return {
        status: "success",
        message: "Blog has been created successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Blog creation failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

exports.readBlogsService = async (req, res) => {
  try {
    let blogs = await BlogModel.find();
    return { status: "success", data: blogs };
  } catch (error) {
    return { status: "failed", message: error.message };
  }
};

exports.updateBlogService = async (req, res) => {
  try {
    let ObjID = new mongoose.Types.ObjectId(req.params.id);
    let updatedBlog = await BlogModel.findByIdAndUpdate(ObjID, req.body, {
      new: true,
    });
    if (updatedBlog) {
      return {
        status: "success",
        message: "Blog has been updated successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Blog updating failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

exports.deleteBlogService = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedBlog = await BlogModel.findByIdAndDelete(id);
    if (deletedBlog) {
      return {
        status: "success",
        message: "Blog has been deleted successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Blog deletion failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

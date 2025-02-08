const ServiceModel = require("../models/ServiceModel.js");

exports.createServiceService = async (req, res) => {
  try {
    let data = await ServiceModel.create(req.body);
    if (data) {
      return {
        status: "success",
        message: "Service has been created successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Service creation failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

exports.readServicesService = async (req, res) => {
  try {
    let data = await ServiceModel.find({});
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed", message: error.message };
  }
};

exports.updateServiceService = async (req, res) => {
  try {
    let data = await ServiceModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (data) {
      return {
        status: "success",
        message: "Service has been updated successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Service updating failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

exports.deleteServiceService = async (req, res) => {
  try {
    let data = await ServiceModel.findByIdAndDelete(req.params.id);
    if (data) {
      return {
        status: "success",
        message: "Service has been deleted successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Service deletion failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

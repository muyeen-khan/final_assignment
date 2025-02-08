const {
  createServiceService,
  readServicesService,
  updateServiceService,
  deleteServiceService,
} = require("../services/ServiceServices");

exports.createService = async (req, res) => {
  let result = await createServiceService(req, res);
  return res.status(200).json(result);
};

exports.readServices = async (req, res) => {
  let result = await readServicesService(req, res);
  return res.status(200).json(result);
};

exports.updateService = async (req, res) => {
  let result = await updateServiceService(req, res);
  return res.status(200).json(result);
};

exports.deleteService = async (req, res) => {
  let result = await deleteServiceService(req, res);
  return res.status(200).json(result);
};

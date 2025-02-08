const {
  createTeamMemberService,
  readTeamMembersService,
  updateTeamMemberService,
  deleteTeamMemberService,
} = require("../services/TeamMemberService.js");

exports.createTeamMember = async (req, res) => {
  let result = await createTeamMemberService(req, res);
  return res.status(200).json(result);
};

exports.readTeamMembers = async (req, res) => {
  let result = await readTeamMembersService(req, res);
  return res.status(200).json(result);
};

exports.updateTeamMember = async (req, res) => {
  let result = await updateTeamMemberService(req, res);
  return res.status(200).json(result);
};

exports.deleteTeamMember = async (req, res) => {
  let result = await deleteTeamMemberService(req, res);
  return res.status(200).json(result);
};

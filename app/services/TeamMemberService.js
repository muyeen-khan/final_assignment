const TeamMemberModel = require("../models/TeamMember.js");

exports.createTeamMemberService = async (req, res) => {
  try {
    let teamMember = await TeamMemberModel.create(req.body);
    if (teamMember) {
      return {
        status: "success",
        message: "Team Member has been created successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Team Member creation failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

exports.readTeamMembersService = async (req, res) => {
  try {
    let teamMembers = await TeamMemberModel.find({});
    return { status: "success", data: teamMembers };
  } catch (error) {
    return { status: "failed", message: error.message };
  }
};

exports.updateTeamMemberService = async (req, res) => {
  try {
    let updatedTeamMember = await TeamMemberModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (updatedTeamMember) {
      return {
        status: "success",
        message: "Team Member has been updated successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Team Member updating failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

exports.deleteTeamMemberService = async (req, res) => {
  try {
    let deletedTeamMember = await TeamMemberModel.findByIdAndDelete(
      req.params.id
    );
    if (deletedTeamMember) {
      return {
        status: "success",
        message: "Team Member has been deleted successfully",
      };
    } else {
      return {
        status: "failed",
        message: "Team Member deletion failed",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

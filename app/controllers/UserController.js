const {
  AllUsersReadProfilesService,
  DeleteUserService,
  LogoutService,
  ReadProfileService,
  UpdatePasswordService,
  UpdateProfileService,
  UserLoginService,
  UserRegisterService,
  VerifyRegisterService,
} = require("../services/UserServices.js");

exports.UserLogin = async (req, res) => {
  let result = await UserLoginService(req, res);
  return res.status(200).json(result);
};

exports.UserLogout = async (req, res) => {
  let result = await LogoutService(req, res);
  return res.status(200).json(result);
};

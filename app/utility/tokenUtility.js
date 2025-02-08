const jwt = require("jsonwebtoken");
const { JWT_EXPIRATION_TIME, JWT_SECRET } = require("../config/config.js");

exports.encodeToken = (email, user_id) => {
  const payload = { email: email, user_id: user_id };
  const expire = { expiresIn: JWT_EXPIRATION_TIME };
  return jwt.sign(payload, JWT_SECRET, expire);
};

exports.decodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

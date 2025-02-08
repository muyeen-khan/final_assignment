const { encodeToken, decodeToken } = require("../utility/tokenUtility.js");
const sendEmail = require("../utility/emailUtility.js");

//token encode & decode
exports.tokenEncode = async (req, res) => {
  let result = await encodeToken(req.body.email, req.body.id);
  res.json({ token: result });
};

exports.tokenDecode = async (req, res) => {
  let result = decodeToken(req.body.token);
  res.json({ data: result });
};

//email sending
exports.mail = async (req, res) => {
  let email = req.body.email;
  let text = req.body.text;
  let sub = req.body.sub;
  let body = req.body.html;
  let result = await sendEmail(email, text, sub, body);
  res.json({ emailStatus: result });
};

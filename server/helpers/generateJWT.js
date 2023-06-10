const jwt = require("jsonwebtoken");

const generateJWT = (payload) =>
  jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, {
    expiresIn: "24h",
  });

module.exports = { generateJWT };

const jwt = require("jsonwebtoken");

const generateJWT = (config) =>
  jwt.sign({ ...config }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });

module.exports = { generateJWT };

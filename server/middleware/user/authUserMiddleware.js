const jwt = require("jsonwebtoken");
const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  const errorSource = "user controller";
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization;
    if (!token) {
      return next();
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    return res.status(200).json({ decoded });
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

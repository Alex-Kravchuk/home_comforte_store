const jwt = require("jsonwebtoken");
const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  const errorSource = "user controller";
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const { token } = req.body;

    if (!token) {
      return next();
    }

    console.log("not token", token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("decoded token", decoded);

    return res.status(200).json({ decoded });
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

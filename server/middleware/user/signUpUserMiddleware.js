const jwt = require("jsonwebtoken");
const ApiError = require("../../error/ApiError");
const { User } = require("../../models/models");

module.exports = async function (req, res, next) {
  try {
    const errorSource = "user controller";
    if (req.method === "OPTIONS") {
      next();
    }

    const { email, password, name, lastname } = req.body;

    const emailAlreadyInUse = await User.findOne({ where: { email } });
    if (emailAlreadyInUse) {
      return next(ApiError.duplicate("email", errorSource));
    }

    if (!email || !password || !name || !lastname) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

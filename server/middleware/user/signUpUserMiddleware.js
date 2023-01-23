const jwt = require("jsonwebtoken");
const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  try {
    const errorSource = "user controller";
    if (req.method === "OPTIONS") {
      next();
    }

    // I use the same middleware like for sign up function
    // here I controll update user image (user img can be only a string, not an array)
    if (req.method === "PUT") {
      if (req.files) {
        const moreThanOneImg = req.files.img.length > 1;
        if (moreThanOneImg) {
          return next(
            ApiError.badRequest("Only one img is required", errorSource)
          );
        }
      }
      return next();
    }

    const token = req.headers.authorization;
    if (token) {
      return res
        .status(500)
        .json({ status: 501, message: "user already exist" });
    }

    const { email, password, name } = req.body;

    if (req.files) {
      const moreThanOneImg = req.files.img.length > 1;
      if (moreThanOneImg) {
        return next(
          ApiError.badRequest("Only one img is required", errorSource)
        );
      }
    }

    if (!email || !password || !name) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

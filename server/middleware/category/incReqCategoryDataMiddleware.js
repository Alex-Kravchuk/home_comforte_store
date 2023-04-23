const ApiError = require("../error/ApiError");

module.exports = () => (req, res, next) => {
  try {
    const errorSource = "category controller";

    const { name } = req.body;
    if (!name) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The name is not defined",
          errorSource
        )
      );
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

const ApiError = require("../../error/ApiError");

module.exports = (req, res, next) => {
  const errorSource = "type or brand controller";

  const { name } = req.body;
  if (!name) {
    return next(
      ApiError.requestDataAreNotDefined("The name is not defined", errorSource)
    );
  }

  next();
};

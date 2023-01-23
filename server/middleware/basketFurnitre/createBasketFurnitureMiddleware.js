const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  const errorSource = "basket furniture controller";

  const { furnitureId, basketId, additionalVariantId } = req.body;

  if (!basketId) {
    return next(
      ApiError.requestDataAreNotDefined(
        "The basket id is not defined",
        errorSource
      )
    );
  }

  if (!furnitureId && !additionalVariantId) {
    return next(
      ApiError.requestDataAreNotDefined("No product ID provided", errorSource)
    );
  }

  next();
};

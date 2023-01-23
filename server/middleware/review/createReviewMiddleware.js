const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  const errorSource = "review controller";
  const {
    name,
    userId,
    furnitureId,
    additionalVariantId,
    date,
    review_title,
    review_body,
    rating,
  } = req.body;

  const allDataAreGiven = name && userId && date && rating;

  if (!allDataAreGiven) {
    return next(ApiError.requestDataAreNotDefined(null, errorSource));
  }

  if (!furnitureId && !additionalVariantId) {
    return next(
      ApiError.requestDataAreNotDefined("No product ID provided", errorSource)
    );
  }

  next();
};

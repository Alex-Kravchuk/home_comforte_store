const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  try {
    const errorSource = "rating controller";
    const { userId, rating, furnitureId, additionalVariantId } = req.body;

    if (!userId) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The user id is not defined",
          errorSource
        )
      );
    }

    if (rating === undefined) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The rating id is not defined",
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
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  const errorSource = "rating controller";
  const { userId, furnitureId, additionalVariantId } = req.body;

  if (!userId) {
    return next(
      ApiError.requestDataAreNotDefined(
        "The user id is not defined",
        errorSource
      )
    );
  }

  if (!furnitureId && !additionalVariantId) {
    return next(
      ApiError.requestDataAreNotDefined("No product ID provided", errorSource)
    );
  }
};

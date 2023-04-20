const ApiError = require("../../error/ApiError");
const { Furniture } = require("../../models/models");

module.exports = async function (req, res, next) {
  try {
    const errorSource = "rating controller";
    const { userId, rating, furnitureId } = req.body;

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

    if (isNaN(furnitureId)) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The furnitureId is not in the correct format or is undefined",
          errorSource
        )
      );
    }else {
    const furniture = await Furniture.findOne({ where: { id: furnitureId } });
  
      if (!furniture) {
        return next(
          ApiError.requestDataAreNotDefined(
            "The furnitureId violates the foreign key rule. The furniture with this identifier was not found",
            errorSource
          )
        );
      }
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

const ApiError = require("../../error/ApiError");
const { Furniture, Preview } = require("../../models/models");

module.exports = async (req, res, next) => {
  try {
    const errorSource = "preview controller";

    const { furnitureId } = req.body;

    if (isNaN(furnitureId)) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The furnitureId is not in the correct format or is undefined",
          errorSource
        )
      );
    } else {
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

    const alreadyExists = await Preview.findOne({ where: { furnitureId } });
    if (alreadyExists) {
      return next(ApiError.duplicate("preview", errorSource));
    }

    if (!req.files) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The images are not defined",
          errorSource
        )
      );
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

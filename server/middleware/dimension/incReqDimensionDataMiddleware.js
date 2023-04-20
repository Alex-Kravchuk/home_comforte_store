const ApiError = require("../../error/ApiError");
const { Furniture } = require("../../models/models");

module.exports = async (req, res, next) => {
  const errorSource = "dimension controller";

  const { furnitureId, details } = req.body;
  if (!details) {
    return next(
      ApiError.requestDataAreNotDefined(
        "The details are not defined",
        errorSource
      )
    );
  }

  if (isNaN(furnitureId)) {
    return next(
      ApiError.requestDataAreNotDefined(
        "The typeId is not in the correct format or is undefined",
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

  if (req.files) {
    const { img } = req.files;

    if (Array.isArray(img)) {
      return next(
        ApiError.requestDataAreNotDefined(
          "An image cannot be an array. You can only select one image",
          errorSource
        )
      );
    }
  } else {
    return next(
      ApiError.requestDataAreNotDefined("The img is not defined", errorSource)
    );
  }

  next();
};

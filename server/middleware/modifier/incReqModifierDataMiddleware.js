const ApiError = require("../../error/ApiError");
const { Furniture, Modifier } = require("../../models/models");

module.exports = async (req, res, next) => {
  const errorSource = "modifier controller";

  const { furnitureId, name, displayMethod, descriptions } = req.body;

  const allDataAreGiven = name && displayMethod && descriptions && furnitureId;

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

  if (!allDataAreGiven) {
    return next(ApiError.requestDataAreNotDefined(null, errorSource));
  } else {
    const modifier = await Modifier.findOne({ where: { name, furnitureId } });

    if (modifier) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The name violates the foreign key rule. The modifier for such furniture with this name already exist",
          errorSource
        )
      );
    }
  }

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


  next();
};

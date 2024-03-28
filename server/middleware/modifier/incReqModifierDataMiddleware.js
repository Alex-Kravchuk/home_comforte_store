const ApiError = require("../../error/ApiError");
const { Furniture } = require("../../models/models");

module.exports = async (req, res, next) => {
  try {
    const errorSource = "modifier controller";

    const { furnitureId, data } = req.body;
    
    const allDataAreGiven = data && furnitureId;

    if (!allDataAreGiven) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
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
  } catch (error) {
    console.log("error message", error.message);

    return next(ApiError.unexpectedError(error, errorSource));
  }
};

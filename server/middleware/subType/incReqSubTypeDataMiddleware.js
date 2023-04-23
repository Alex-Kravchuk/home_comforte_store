const ApiError = require("../../error/ApiError");
const { Type } = require("../../models/models");

module.exports = async (req, res, next) => {
  try {
    const errorSource = "subType controller";

    const { name, typeId } = req.body;

    if (!name) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The name is not defined",
          errorSource
        )
      );
    }

    if (isNaN(typeId)) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The typeId is not in the correct format or is undefined",
          errorSource
        )
      );
    } else {
      const type = await Type.findOne({ where: { id: typeId } });

      if (!type) {
        return next(
          ApiError.requestDataAreNotDefined(
            "The typeId violates the foreign key rule. The type with this identifier was not found",
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

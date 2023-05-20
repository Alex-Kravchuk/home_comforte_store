const ApiError = require("../../error/ApiError");
const { Category, Type } = require("../../models/models");

module.exports = async (req, res, next) => {
  try {
    const errorSource = "type controller";

    const { name, categoryId } = req.body;

    if (!name) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The name is not defined",
          errorSource
        )
      );
    } else {
      const alreadyExists = await Type.findOne({ where: { name, categoryId } });

      if (alreadyExists) {
        return next(
          ApiError.requestDataAreNotDefined(
            "A type with that name already exists for the current category",
            errorSource
          )
        );
      }
    }

    if (isNaN(categoryId)) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The categoryId is not in the correct format or is undefined",
          errorSource
        )
      );
    } else {
      const category = await Category.findOne({ where: { id: categoryId } });

      if (!category) {
        return next(
          ApiError.requestDataAreNotDefined(
            "The categoryId violates the foreign key rule. The category with this identifier was not found",
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
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

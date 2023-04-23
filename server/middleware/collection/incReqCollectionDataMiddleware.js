const ApiError = require("../../error/ApiError");

module.exports = async (req, res, next) => {
  try {
    const errorSource = "collection controller";

    const { name, description } = req.body;

    if (!name) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The name is not defined",
          errorSource
        )
      );
    }

    if (!description) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The description is not defined",
          errorSource
        )
      );
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

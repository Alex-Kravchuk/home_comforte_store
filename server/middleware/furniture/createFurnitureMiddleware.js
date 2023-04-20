const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  const errorSource = "furniture controller";
  try {
    const { name, typeId, description, subTypeId, categoryId, price } =
      req.body;

    if (!req.files) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    const { img } = req.files;

    const allDataAreGiven =
      name && typeId && description && price && subTypeId && categoryId;

    if (!allDataAreGiven) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    if (!img) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

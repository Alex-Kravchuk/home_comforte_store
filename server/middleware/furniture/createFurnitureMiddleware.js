const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  const errorSource = "furniture controller";
  try {
    const {
      name,
      typeId,
      brandId,
      description,
      price,
      material_info,
      dimension_info,
      modifier_info = true,
    } = req.body;

    if (!req.files) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    const { img, dimension_img } = req.files;

    const allDataAreGiven =
      name &&
      typeId &&
      brandId &&
      description &&
      price &&
      material_info &&
      dimension_info &&
      modifier_info;

    if (!allDataAreGiven) {
      return next(ApiError.requestDataAreNotDefined(errorSource));
    }

    if (!img || !dimension_img) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

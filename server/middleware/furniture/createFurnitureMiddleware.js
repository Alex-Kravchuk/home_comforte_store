const ApiError = require("../../error/ApiError");
const { Furniture } = require("../../models/models");

module.exports = async function (req, res, next) {
  const errorSource = "furniture controller";
  try {
    const { name, typeId, description, subTypeId, categoryId, price } =
      req.body;

    const allDataAreGiven =
      name && typeId && description && price && subTypeId && categoryId;

    if (!allDataAreGiven) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    // image checking
    if (!req.files) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    const { img } = req.files;

    if (!img) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    // name checking
    if (name) {
      const furniture = await Furniture.findOne({ where: { name } });

      if (furniture) {
        return next(ApiError.duplicateName(errorSource));
      }
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

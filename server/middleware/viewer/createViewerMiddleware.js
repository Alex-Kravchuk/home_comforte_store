const ApiError = require("../../error/ApiError");
const { Viewer } = require("../../models/models");

module.exports = async function (req, res, next) {
  const errorSource = "viewer controller";
  try {
    const { options, modifierId, furnitureId, modifierOptionId } = req.body;

    console.log("====================================");
    console.log(req.body);
    console.log(req.files);

    console.log("====================================");
    // return
    const allDataAreGiven =
      options && modifierId && furnitureId && modifierOptionId;

    if (!allDataAreGiven) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    // image checking
    if (!req.files) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    console.log("REQ FILES", req.files);

    const { images } = req.files;

    if (!images) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    // name checking

    const viewer = await Viewer.findOne({
      where: {
        options: JSON.parse(options),
        modifierId,
        furnitureId,
        modifierOptionId,
      },
    });

    if (viewer) {
      return next(ApiError.duplicateName(errorSource));
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

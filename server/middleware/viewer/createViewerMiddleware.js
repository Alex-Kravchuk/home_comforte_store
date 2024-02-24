const ApiError = require("../../error/ApiError");
const { Viewer } = require("../../models/models");

module.exports = async function (req, res, next) {
  const errorSource = "viewer controller";
  try {
    const { options, furnitureId } = req.body;

    console.log("=================pop===================");
    console.log(req.body);
    console.log("====================================");

    const allDataAreGiven = options && furnitureId;

    if (!allDataAreGiven) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    // image checking
    if (!req.files) {
      return next(
        ApiError.requestDataAreNotDefined("No image selected", errorSource)
      );
    }

    // duplicate checking

    // when options is array
    if (Array.isArray(options)) {
      for (const option of options) {
        console.log("prin options", option);

        const viewer = await Viewer.findOne({
          where: {
            options: JSON.parse(option),
            furnitureId,
          },
        });

        if (viewer) {
          return next(ApiError.duplicate("options", errorSource));
        }
      }
    } else {
      // when options is string
      const viewer = await Viewer.findOne({
        where: {
          options: JSON.parse(options),
          furnitureId,
        },
      });

      if (viewer) {
        return next(ApiError.duplicate("options", errorSource));
      }
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

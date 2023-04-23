const ApiError = require("../../error/ApiError");

module.exports = async (req, res, next) => {
  try {
    const errorSource = "modifier controller";

    const { displayMethod, descriptions } = req.body;

    const descriptionsParsed = JSON.parse(descriptions);

    const correctDisplayMethod =
      displayMethod === "list" ||
      displayMethod === "tile" ||
      displayMethod === "table";

    if (!correctDisplayMethod) {
      return next(
        ApiError.requestDataAreNotDefined(
          "The display method is not in the correct format of is undefined",
          errorSource
        )
      );
    }

    if (!descriptionsParsed.length) {
      return next(
        ApiError.requestDataAreNotDefined(
          "There is no list of described values",
          errorSource
        )
      );
    }

    if (!req.files) {
      if (displayMethod === "list") {
        return next(
          ApiError.requestDataAreNotDefined(
            "The img is not defined",
            errorSource
          )
        );
      }
    } else {
      const { img } = req.files;
      // if there is only one image, then we set the length to 1
      const imagesLength = img.length ?? 1;

      const wrongNumberElements = imagesLength !== descriptionsParsed.length;

      if (wrongNumberElements) {
        return next(
          ApiError.requestDataAreNotDefined(
            "The number of images does not match the number of descriptions",
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

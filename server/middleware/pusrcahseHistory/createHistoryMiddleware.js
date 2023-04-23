const ApiError = require("../../error/ApiError");

module.exports = function (req, res, next) {
  try {
    const errorSource = "purchase history controller";
    const { goods, userId, basketId } = req.body;

    const areDataNotGiven = !goods || !userId || !basketId;

    if (areDataNotGiven) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

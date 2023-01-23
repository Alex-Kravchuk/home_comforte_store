const ApiError = require("../error/ApiError");

module.exports = function (source) {
  return function (req, res, next) {
    const errorSource = `${source} controller`;
    try {
      const { id } = req.params;
      const idIsNaN = isNaN(id);

      if (idIsNaN) {
        return next(ApiError.idIsNotANumber(errorSource));
      }

      next();
    } catch (error) {
      return next(ApiError.unexpectedError(error, errorSource));
    }
  };
};

const ApiError = require("../error/ApiError");

module.exports = function (source) {
  return function (req, res, next) {
    try {
      const errorSource = `${source} controller`;
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

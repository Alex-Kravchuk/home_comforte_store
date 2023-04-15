const ApiError = require("../error/ApiError");

module.exports = (source) => (req, res, next) => {
  const errorSource = `${source} controller`;

  const { name } = req.body;
  if (!name) {
    return next(
      ApiError.requestDataAreNotDefined("The name is not defined", errorSource)
    );
  }

  next();
};

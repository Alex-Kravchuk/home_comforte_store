const ApiError = require("../error/ApiError");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({
      _source: err.source_error,
      status: err.status,
      message: err.message,
    });
  }

  return res.status(500).json({ message: "Something went wrong" });
};

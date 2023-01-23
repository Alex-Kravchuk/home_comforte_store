const jwt = require("jsonwebtoken");
const ApiError = require("../../error/ApiError");

module.exports = function (role) {
  return function (req, res, next) {
    const errorSource = "user controller";
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ status: 401, message: "Not authorized" });
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log("decode", decoded.role);

      const available = decoded.role.include(role);

      if (available) {
        return res.status(401).json({ message: "Not available" });
      }

      req.user = decoded;

      next();
    } catch (error) {
      return next(ApiError.unexpectedError(error, errorSource));
    }
  };
};

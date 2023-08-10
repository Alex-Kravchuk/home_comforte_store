const jwt = require("jsonwebtoken");
const ApiError = require("../../error/ApiError");
const tokenService = require("../../services/token-service");

module.exports = function (req, res, next) {
  const errorSource = "user controller";
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return next(ApiError.notAuthorized(errorSource));
    }

    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.notAuthorized(errorSource));
    }

    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData) {
      return next(ApiError.notAuthorized(errorSource));
    }

    req.user = userData;
    next();
  } catch (error) {    
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

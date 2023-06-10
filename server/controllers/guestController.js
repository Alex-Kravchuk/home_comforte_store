const ApiError = require("../error/ApiError");
const { generateJWT } = require("../helpers/generateJWT");
const { Guest, Basket } = require("../models/models");
const guestService = require("../services/guest-service");

class GuestController {
  static errorSource = "guest controller";

  async create(req, res, next) {
    try {
      const guestToken = await guestService.create();

      return res.json({ token: guestToken });
    } catch (error) {
      return next(ApiError.unexpectedError(error, GuestController.errorSource));
    }
  }

  async removeGuest(req, res, next) {
    try {
      const { token } = req.body;

      if (token) {
        const guestRemoved = await guestService.removeGuest(token);
        if (guestRemoved) {
          return res.json({ message: "deleted" });
        } else {
          return next(
            ApiError.unexpectedError(
              "Error deleting guest",
              GuestController.errorSource
            )
          );
        }
      }
    } catch (error) {
      return next(ApiError.unexpectedError(error, GuestController.errorSource));
    }
  }
}

module.exports = new GuestController();

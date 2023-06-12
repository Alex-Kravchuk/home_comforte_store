const ApiError = require("../error/ApiError");

const guestService = require("../services/guest-service");

class GuestController {
  static errorSource = "guest controller";

  async create(req, res, next) {
    try {
      const { token } = req.body;
      const guestToken = await guestService.create(token);

      return res.json({ token: guestToken });
    } catch (error) {
      return next(error);
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
            ApiError.badRequest(
              "Error deleting guest",
              GuestController.errorSource
            )
          );
        }
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new GuestController();

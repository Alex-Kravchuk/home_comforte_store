const ApiError = require("../error/ApiError");
const { generateJWT } = require("../helpers/generateJWT");
const { Guest, Basket } = require("../models/models");

class GuestController {
  static errorSource = "guest controller";

  async create(req, res, next) {
    try {
      const guest = await Guest.create();
      const basket = await Basket.create({ guestId: guest.id });

      const jwtConfig = {
        guest_id: guest.id,
        basket_id: basket.id,
        role: guest.role,
      };

      const token = generateJWT(jwtConfig);

      return res.json({ token });
    } catch (error) {
      return next(ApiError.unexpectedError(error, GuestController.errorSource));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const basket = await Guest.findOne({ where: { id } });

      return res.json(basket);
    } catch (error) {
      return next(ApiError.unexpectedError(error, GuestController.errorSource));
    }
  }
}

module.exports = new GuestController();

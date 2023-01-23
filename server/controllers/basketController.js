const ApiError = require("../error/ApiError");
const { Basket } = require("../models/models");

class BasketController {
  static errorSource = "basket controller";

  async create(req, res, next) {
    try {
      const { userId } = req.body;
      const basket = await Basket.create({ userId });

      return res.json(basket);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, BasketController.errorSource)
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const basket = await Basket.findOne({ where: { id } });

      return res.json(basket);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, BasketController.errorSource)
      );
    }
  }
}

module.exports = new BasketController();

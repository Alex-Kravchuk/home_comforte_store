const { PurchaseHistory } = require("../models/models");

const ApiError = require("../error/ApiError");

const { goodsMOCK } = require("../assets/mock/purchaseHistory");

class PurchaseHistoryController {
  static errorSource = "purchase history controller";

  async create(req, res, next) {
    try {
      const { goods, userId, basketId } = req.body;

      const goodsMOCK_test = JSON.parse(goodsMOCK);

      const history = await PurchaseHistory.create({
        goods: goodsMOCK_test,
        userId,
        basketId,
      });

      return res.json(history);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PurchaseHistoryController.errorSource)
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const history = await PurchaseHistory.findOne({ where: { id } });
      return res.json(history);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PurchaseHistoryController.errorSource)
      );
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const history = await PurchaseHistory.findOne({ where: { id } });
      history.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PurchaseHistoryController.errorSource)
      );
    }
  }
}

module.exports = new PurchaseHistoryController();

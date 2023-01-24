const ApiError = require("../error/ApiError");
const { BasketFurniture } = require("../models/models");

class BasketFurnitureController {
  static errorSource = "basket furniture controller";
  async create(req, res, next) {
    try {
      const { furnitureId, basketId, additionalVariantId } = req.body;

      const duplicate = await BasketFurniture.findOne({
        where: { furnitureId, basketId },
      });
      if (duplicate) {
        return next(
          ApiError.badRequest(
            "The current furniture is already in this basket",
            BasketFurnitureController.errorSource
          )
        );
      }
      const basketFurniture = await BasketFurniture.create({
        furnitureId,
        basketId,
        additionalVariantId,
      });

      return res.json(basketFurniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, BasketFurnitureController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const { id } = req.params;
      const basketFurnitures = await BasketFurniture.findAndCountAll({
        where: { basketId: id },
      });

      return res.json(basketFurnitures);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, BasketFurnitureController.errorSource)
      );
    }
  }
}

module.exports = new BasketFurnitureController();

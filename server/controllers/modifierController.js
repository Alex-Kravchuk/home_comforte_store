const ApiError = require("../error/ApiError");
const { Modifier } = require("../models/models");

const furnitureService = require("../services/furniture-service");

class ModifierController {
  static errorSource = "modifier controller";
  async create(req, res, next) {
    try {
      const { data, furnitureId } = req.body;

      const modifiers = await furnitureService.createModifiers(
        data,
        furnitureId
      );

      return res.json(modifiers);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ModifierController.errorSource)
      );
    }
  }

  // to get all modifiers of current furniture
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const modifier = await Modifier.findAll({ where: { furnitureId: id } });

      return res.json(modifier);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ModifierController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const modifier = await Modifier.findOne({ where: { id } });

      modifier.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ModifierController.errorSource)
      );
    }
  }
}

module.exports = new ModifierController();

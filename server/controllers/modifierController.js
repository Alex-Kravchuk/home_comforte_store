const ApiError = require("../error/ApiError");
const { Modifier } = require("../models/models");

class ModifierController {
  static errorSource = "modifier controller";
  async create(req, res, next) {
    try {
      const { name, items, displayMethod } = req.body;

      const alreadyExists = await Modifier.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(ModifierController.errorSource));
      }

      const modifier = await Modifier.create({ name, items, displayMethod });
      return res.json(modifier);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ModifierController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const modifiers = await Modifier.findAll();
      return res.json(modifiers);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ModifierController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const modifier = await Modifier.findOne({ where: { id } });

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

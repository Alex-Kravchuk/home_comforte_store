const ApiError = require("../error/ApiError");
const { Modifier } = require("../models/models");

const createImgName = require("../helpers/createImgName");
const createModifier = require("../helpers/createModifier");

const mockLISTMODIFIER = require("../assets/mock/modifierMOCK");

class ModifierController {
  static errorSource = "modifier controller";
  async create(req, res, next) {
    try {
      let fileNames;
      const { name, descriptions, displayMethod, furnitureId } = req.body;

      const alreadyExists = await Modifier.findOne({
        where: { name, furnitureId },
      });

      if (alreadyExists) {
        return next(ApiError.duplicateName(ModifierController.errorSource));
      }

      if (req.files) {
        const { img } = req.files;
        fileNames = createImgName(img, "ARRAY");
      }

      const items = createModifier(displayMethod, fileNames, descriptions);

   

      const modifier = await Modifier.create({ name, items, displayMethod, furnitureId });
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

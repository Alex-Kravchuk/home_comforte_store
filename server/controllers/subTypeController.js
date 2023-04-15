const ApiError = require("../error/ApiError");
const { SubType } = require("../models/models");

class SubTypeController {
  static errorSource = "subType controller";
  async create(req, res, next) {
    try {
      const { name, typeId } = req.body;

      const alreadyExists = await SubType.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(SubTypeController.errorSource));
      }

      const subType = await SubType.create({ name, typeId });
      return res.json(subType);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SubTypeController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const subTypes = await SubType.findAll();
      return res.json(subTypes);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SubTypeController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const subType = await SubType.findOne({ where: { id } });

      return res.json(subType);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SubTypeController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const subType = await SubType.findOne({ where: { id } });

      subType.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SubTypeController.errorSource)
      );
    }
  }
}

module.exports = new SubTypeController();

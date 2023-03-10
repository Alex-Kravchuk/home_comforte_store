const ApiError = require("../error/ApiError");
const { Type } = require("../models/models");

class TypeController {
  static errorSource = "type controller";
  async create(req, res, next) {
    try {
      const { name } = req.body;

      const alreadyExists = await Type.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(TypeController.errorSource));
      }

      const type = await Type.create({ name });
      return res.json(type);
    } catch (error) {
      return next(ApiError.unexpectedError(error, TypeController.errorSource));
    }
  }

  async getAll(req, res, next) {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (error) {
      return next(ApiError.unexpectedError(error, TypeController.errorSource));
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const type = await Type.findOne({ where: { id } });

      return res.json(type);
    } catch (error) {
      return next(ApiError.unexpectedError(error, TypeController.errorSource));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const type = await Type.findOne({ where: { id } });

      type.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(ApiError.unexpectedError(error, TypeController.errorSource));
    }
  }
}

module.exports = new TypeController();

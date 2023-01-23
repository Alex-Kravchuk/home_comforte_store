const { Brand } = require("../models/models");

const ApiError = require("../error/ApiError");

class BrandController {
  static errorSource = "brand controller";

  async create(req, res, next) {
    try {
      const { name } = req.body;

      const alreadyExists = await Brand.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(BrandController.errorSource));
      }

      const brand = await Brand.create({ name });

      return res.json(brand);
    } catch (error) {
      return next(ApiError.unexpectedError(error, BrandController.errorSource));
    }
  }

  async getAll(req, res) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (error) {
      return next(ApiError.unexpectedError(error, BrandController.errorSource));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const brand = await Brand.findOne({ where: { id } });
      return res.json(brand);
    } catch (error) {
      return next(ApiError.unexpectedError(error, BrandController.errorSource));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const brand = await Brand.findOne({ where: { id } });
      brand.update({ name });

      return res.json(brand);
    } catch (error) {
      return next(ApiError.unexpectedError(error, BrandController.errorSource));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const brand = await Brand.findOne({ where: { id } });
      brand.destroy();

      return res.json({ message: "delete" });
    } catch (error) {
      return next(ApiError.unexpectedError(error, BrandController.errorSource));
    }
  }
}

module.exports = new BrandController();

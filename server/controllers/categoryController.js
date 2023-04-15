const ApiError = require("../error/ApiError");
const { Category } = require("../models/models");

class CategoryController {
  static errorSource = "category controller";
  
  async create(req, res, next) {
    try {
      const { name } = req.body;

      const alreadyExists = await Category.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(CategoryController.errorSource));
      }

      const category = await Category.create({ name });
      return res.json(category);
    } catch (error) {
      return next(ApiError.unexpectedError(error, CategoryController.errorSource));
    }
  }

  async getAll(req, res, next) {
    try {
      const categorys = await Category.findAll();
      return res.json(categorys);
    } catch (error) {
      return next(ApiError.unexpectedError(error, CategoryController.errorSource));
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ where: { id } });

      return res.json(category);
    } catch (error) {
      return next(ApiError.unexpectedError(error, CategoryController.errorSource));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ where: { id } });

      category.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(ApiError.unexpectedError(error, CategoryController.errorSource));
    }
  }
}

module.exports = new CategoryController();
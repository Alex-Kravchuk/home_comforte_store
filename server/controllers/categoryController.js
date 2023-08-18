const ApiError = require("../error/ApiError");
const { Category } = require("../models/models");
const categoryService = require("../services/category-service");

class CategoryController {
  static errorSource = "category controller";

  async create(req, res, next) {
    try {
      const { name } = req.body;
      console.log(name);
      const alreadyExists = await Category.findOne({ where: { name } });

      if (alreadyExists) {
        return next(ApiError.duplicate("name", CategoryController.errorSource));
      }

      const category = await Category.create({ name });

      return res.json(category);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CategoryController.errorSource)
      );
    }
  }

  async update(req, res, next) {
    try {
      const { data } = req.body;

      console.log(data);
      const response = await categoryService.updateCategory(data);
      return res.json(response);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CategoryController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const categorys = await Category.findAll({ order: ["id"] });
      return res.json(categorys);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CategoryController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ where: { id } });

      return res.json(category);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CategoryController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ where: { id } });

      category.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CategoryController.errorSource)
      );
    }
  }
}

module.exports = new CategoryController();

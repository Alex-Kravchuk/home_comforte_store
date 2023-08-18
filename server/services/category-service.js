const ApiError = require("../error/ApiError");
const { Category } = require("../models/models");

class CategoryService {
  static errorSource = "category service";

  async updateCategory(updatedCategories) {
    updatedCategories.forEach(async ({ id, name }) => {
      const category = await Category.findOne({
        where: { id },
      });

      if (!category) {
        throw ApiError.badRequest(
          "PIZDEZ TY DAUN",
          CategoryService.errorSource
        );
      }

      await category.update({ id, name });
    });

    return updatedCategories;
  }
}

module.exports = new CategoryService();

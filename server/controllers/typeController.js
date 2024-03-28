const ApiError = require("../error/ApiError");
const { Type } = require("../models/models");

const createImgName = require("../helpers/createImgName");

class TypeController {
  static errorSource = "type controller";
  async create(req, res, next) {
    try {
      const { name, categoryId } = req.body;
      const { icon, preview } = req.files;

      // let imgName;
      // imgName = createImgName(img, "STRING");

      const type = await Type.create({
        name,
        icon: createImgName(icon, "STRING"),
        preview: createImgName(preview, "STRING"),
        categoryId,
      });
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

  // maybe getOne will be need later

  async getAllByCategoryId(req, res) {
    try {
      const { id } = req.params;
      const type = await Type.findAll({ where: { categoryId: id } });

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

const ApiError = require("../error/ApiError");
const { Preview } = require("../models/models");

class PreviewController {
  static errorSource = "preview controller";
  async create(req, res, next) {
    try {
      const { name, content } = req.body;

      const alreadyExists = await Preview.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(PreviewController.errorSource));
      }

      const preview = await Preview.create({ name, content });
      return res.json(preview);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PreviewController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const previews = await Preview.findAll();
      return res.json(previews);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PreviewController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const preview = await Preview.findOne({ where: { id } });

      return res.json(preview);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PreviewController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const preview = await Preview.findOne({ where: { id } });

      preview.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PreviewController.errorSource)
      );
    }
  }
}

module.exports = new PreviewController();

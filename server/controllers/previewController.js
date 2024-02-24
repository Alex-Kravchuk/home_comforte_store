const ApiError = require("../error/ApiError");
const { Preview } = require("../models/models");

const furnitureService = require("../services/furniture-service");

class PreviewController {
  static errorSource = "preview controller";
  async create(req, res, next) {
    try {
      const { furnitureId } = req.body;

      console.log("request body", req.body.furnitureId);

      const { images } = req.files;
      const preview = await furnitureService.createFurniturePreview(
        images,
        furnitureId
      );
      return res.json(preview);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, PreviewController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const preview = await Preview.findOne({ where: { furnitureId: id } });

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
      const preview = await Preview.findOne({ where: { furnitureId: id } });

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

const ApiError = require("../error/ApiError");
const furnitureService = require("../services/furniture-service");

class ViewerController {
  static errorSource = "viewer controller";

  async create(req, res, next) {
    try {
      const { options, furnitureId } = req.body;
      const { images } = req.files;

      const viewers = await furnitureService.createFurnitureViewer(
        options,
        furnitureId,
        images
      );

      console.log("====================================");
      console.log(viewers);
      console.log("====================================");

      // TODO What returns service

      return res.json(viewers);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ViewerController.errorSource)
      );
    }
  }

  async getByQueryParams(req, res, next) {
    try {
      const queryParams = req.query;

      const viewer = await furnitureService.getViewerDataByQueryParams(
        queryParams
      );

      return res.json(viewer);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ViewerController.errorSource)
      );
    }
  }
}

module.exports = new ViewerController();

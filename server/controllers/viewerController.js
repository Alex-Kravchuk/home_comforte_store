const ApiError = require("../error/ApiError");
const { Viewer } = require("../models/models");

const createImgName = require("../helpers/createImgName");
const viewerService = require("../services/viewer-service");

class ViewerController {
  static errorSource = "viewer controller";

  async create(req, res, next) {
    try {
      const { options, modifierId, furnitureId, modifierOptionId } = req.body;
      const { images } = req.files;


	  const test = options ?? {
		option: {
			material_type: 10,
			legs: 12,
			size: 18,
			option18: 22
		},
		modifierId: 1,
		furnitureId: 21,
		modifierOptionId: 12
	  }

      if (!options || !images) {
        return next(
          ApiError.requestDataAreNotDefined(null, ViewerController.errorSource)
        );
      }

      const viewer = await viewerService.createViewer(req.body, images);
      return res.json(viewer);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ViewerController.errorSource)
      );
    }
  }

  async getByQueryParams(req, res, next) {
    try {
      const queryParams = req.query;

      const viewer = await viewerService.getViewerDataByQueryParams(
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

const ApiError = require("../error/ApiError");
const createImgName = require("../helpers/createImgName");
const { Viewer } = require("../models/models");

class ViewerService {
  static errorSource = "viewer service";

  async createViewer(
    { options, modifierId, furnitureId, modifierOptionId },
    images
  ) {
    const fileNames = createImgName(images, "ARRAY");

    // TODO To make furniture and modifier in DB for ability create viewer

    const viewer = await Viewer.create({
      options: JSON.parse(options),
      modifierId,
      furnitureId,
      modifierOptionId,
      images: fileNames,
    });

    return viewer;
  }

  async getViewerDataByQueryParams(options) {
    const viewer = await Viewer.findOne({ where: { options } });

    return viewer;
  }
}

module.exports = new ViewerService();

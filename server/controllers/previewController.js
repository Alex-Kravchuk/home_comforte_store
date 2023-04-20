const ApiError = require("../error/ApiError");
const { Preview } = require("../models/models");

const createImgName = require("../helpers/createImgName");

class PreviewController {
  static errorSource = "preview controller";
  async create(req, res, next) {
    // details are an array each index of which is equal to the image index in req.files array
    try {
      const { furnitureId, details } = req.body;
      let filesNames;
      let content = [];
      const detailsParse = JSON.parse(details);

      const alreadyExists = await Preview.findOne({ where: { furnitureId } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(PreviewController.errorSource));
      }

      if (req.files) {
        const { img } = req.files;
        filesNames = createImgName(img, "ARRAY");
      }

      content = filesNames.map((element, index) => {
        let contentItem = { description: "", img: "" };

        contentItem.img = element;
        contentItem.description = detailsParse[index];

        return contentItem;
      });

      const preview = await Preview.create({
        furnitureId,
        content,
      });
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
      const preview = await Preview.findOne({ where: { furnitureId: id  } });

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

const createImgName = require("../helpers/createImgName");
const ApiError = require("../error/ApiError");
const { AdditionalVarigant } = require("../models/models");
const {
  materialInfoMOCK,
  dimensionInfoMOCK,
} = require("../assets/mock/furnitureAdditionalnfo");

class AdditionalVariantController {
  static errorSource = "additional variant furniture controller";

  async create(req, res, next) {
    try {
      let dimensionImgName;
      let filesNames;

      const {
        furnitureId,
        name,
        typeId,
        brandId,
        description,
        price,
        material_info,
        dimension_info,
      } = req.body;

      const duplicateName = await AdditionalVariant.findOne({
        where: { name },
      });

      if (duplicateName) {
        return next(
          ApiError.duplicateName(AdditionalVariantController.errorSource)
        );
      }

      if (req.files) {
        const { img: images, dimension_img } = req.files;

        dimensionImgName = createImgName(dimension_img, "STRING");
        filesNames = createImgName(images, "ARRAY");
      }

      // it's for testing
      const materialInfo = JSON.parse(materialInfoMOCK);
      const dimensionInfo = JSON.parse(dimensionInfoMOCK(dimensionImgName));

      const furniture = await AdditionalVariant.create({
        furnitureId,
        name,
        typeId,
        brandId,
        description,
        price: Number(price),
        img: filesNames,
        material_info: materialInfo,
        dimension_info: dimensionInfo,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const furniture = await AdditionalVariant.findOne({ where: { id } });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
      );
    }
  }

  async update(req, res, next) {
    try {
      let dimensionImgName;
      let filesNames;

      const { name, description, price, material_info, dimension_info } =
        req.body;

      const { id } = req.params;

      if (req.files) {
        const { img: images, dimension_img } = req.files;

        dimensionImgName = createImgName(dimension_img, "STRING");
        filesNames = createImgName(images, "ARRAY");
      }

      // TODO dimenisonImgName will be use in dimension_info object

      const materialInfo = JSON.parse(materialInfoMOCK);
      const dimensionInfo = JSON.parse(dimensionInfoMOCK(dimensionImgName));

      const furniture = await AdditionalVariant.findOne({ where: { id } });

      furniture.update({
        name,
        description,
        price: Number(price),
        img: filesNames,
        material_info: materialInfo,
        dimension_info: dimensionInfo,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const furniture = await AdditionalVariant.findOne({ where: { id } });
      furniture.destroy();
      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
      );
    }
  }
}

module.exports = new AdditionalVariantController();

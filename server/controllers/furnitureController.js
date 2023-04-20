const createImgName = require("../helpers/createImgName");
const ApiError = require("../error/ApiError");

const { Furniture, Rating } = require("../models/models");

// it's for testing
const { dimensionInfoMOCK } = require("../assets/mock/furnitureAdditionalnfo");
const { modifierInfoMOCK } = require("../assets/mock/furnitureAdditionalnfo");
const { materialInfoMOCK } = require("../assets/mock/furnitureAdditionalnfo");

class FurnitureController {
  static errorSource = "furniture controller";
  async create(req, res, next) {
    try {
      let dimensionImgName;
      let filesNames;

      const {
        name,
        typeId,
        categoryId,
        subTypeId,
        collectionId,
        description,
        price,
      } = req.body;

      const duplicateName = await Furniture.findOne({ where: { name } });
      if (duplicateName) {
        return next(ApiError.duplicateName(FurnitureController.errorSource));
      }

      if (req.files) {
        const { img } = req.files;

        filesNames = createImgName(img, "ARRAY");
      }

      // it's for testing
      const materialInfo = JSON.parse(materialInfoMOCK);
      const dimensionInfo = JSON.parse(dimensionInfoMOCK(dimensionImgName));
      const modifierInfo = JSON.parse(modifierInfoMOCK);

      const furniture = await Furniture.create({
        name,
        price: Number(price),
        typeId,
        categoryId,
        subTypeId,
        description,
        collectionId,
        img: filesNames,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 3;
      const offset = page * limit - limit;

      let furnitures;

      if (!brandId && !typeId) {
        furnitures = await Furniture.findAndCountAll({ limit, offset });
      }

      if (brandId && !typeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }

      if (!brandId && typeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }

      if (brandId && typeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { typeId, brandId },
          limit,
          offset,
        });
      }

      return res.json(furnitures);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const furniture = await Furniture.findOne({ where: { id } });
      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async update(req, res, next) {
    try {
      let dimensionImgName;
      let filesNames;

      const {
        name,
        description,
        price,
        material_info,
        dimension_info,
        modifier_info,
      } = req.body;

      const { id } = req.params;

      if (req.files) {
        const { img: images, dimension_img, material_img } = req.files;

        dimensionImgName = createImgName(dimension_img, "STRING");
        filesNames = createImgName(images, "ARRAY");
      }

      const furniture = await Furniture.findOne({ where: { id } });

      // it's for testing
      const materialInfo = JSON.parse(materialInfoMOCK);
      const dimensionInfo = JSON.parse(dimensionInfoMOCK(dimensionImgName));
      const modifierInfo = JSON.parse(modifierInfoMOCK);

      furniture.update({
        name,
        description,
        price: Number(price),
        material_info: materialInfo,
        dimension_info: dimensionInfo,
        modifier_info: modifierInfo,
        img: filesNames,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const furniture = await Furniture.findOne({ where: { id } });
      furniture.destroy();
      return res.json({ message: "deleted" });
    } catch (error) {
      return next(ApiError.unexpectedError(FurnitureController.errorSource));
    }
  }
}

module.exports = new FurnitureController();

const createImgName = require("../helpers/createImgName");
const ApiError = require("../error/ApiError");

const { Furniture, Rating } = require("../models/models");

class FurnitureController {
  static errorSource = "furniture controller";
  async create(req, res, next) {
    try {
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

      const { img } = req.files;
      filesNames = createImgName(img, "ARRAY");

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

  async getAllByCollectionId(req, res, next) {
    try {
      let { limit, page } = req.query;
      let { id } = req.params;

      page = page || 1;
      limit = limit || 3;
      const offset = page * limit - limit;

      const furnitures = await Furniture.findAndCountAll({
        where: { collectionId: id },
        limit,
        offset,
      });

      return res.json(furnitures);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      let { subTypeId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 3;
      const offset = page * limit - limit;

      let furnitures;

      if (typeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }

      if (subTypeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { subTypeId },
          limit,
          offset,
        });
      }

      if (!subTypeId && !typeId) {
        furnitures = await Furniture.findAndCountAll({ limit, offset });
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
      let filesNames;

      const { name, description, price } = req.body;

      const { id } = req.params;

      if (req.files) {
        const { img } = req.files;

        filesNames = createImgName(img, "ARRAY");
      }

      const furniture = await Furniture.findOne({ where: { id } });

      // it's for testing

      furniture.update({
        name,
        description,
        price: Number(price),
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

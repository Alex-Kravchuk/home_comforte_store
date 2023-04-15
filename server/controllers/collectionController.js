const ApiError = require("../error/ApiError");
const { Collection } = require("../models/models");

const createImgName = require("../helpers/createImgName");

class CollectionController {
  static errorSource = "collection controller";

  async create(req, res, next) {
    try {
      let fileName;
      const { name, description } = req.body;

      const alreadyExists = await Collection.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(CollectionController.errorSource));
      }

      if (req.files) {
        const { img } = req.files;
        fileName = createImgName(img, "STRING");
      }

      const collection = await Collection.create({
        name,
        description,
        img: fileName,
      });

      return res.json(collection);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CollectionController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const collections = await Collection.findAll();
      return res.json(collections);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CollectionController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const collection = await Collection.findOne({ where: { id } });

      return res.json(collection);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CollectionController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const collection = await Collection.findOne({ where: { id } });

      collection.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, CollectionController.errorSource)
      );
    }
  }
}

module.exports = new CollectionController();

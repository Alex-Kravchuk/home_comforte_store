const ApiError = require("../error/ApiError");

const { Dimension } = require("../models/models");
const furnitureService = require("../services/furniture-service");

class DimensionController {
  static errorSource = "dimension controller";
  async create(req, res, next) {
    try {
      const dimension = await furnitureService.createFurnitureDimenions(req);
      return res.json(dimension);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, DimensionController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const dimensions = await Dimension.findAll();
      return res.json(dimensions);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, DimensionController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const dimension = await Dimension.findOne({ where: { id } });

      return res.json(dimension);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, DimensionController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const dimension = await Dimension.findOne({ where: { id } });

      dimension.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, DimensionController.errorSource)
      );
    }
  }
}

module.exports = new DimensionController();

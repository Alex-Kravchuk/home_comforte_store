const ApiError = require("../error/ApiError");
const { Seating } = require("../models/models");

class SeatingController {
  static errorSource = "preview controller";
  async create(req, res, next) {
    try {
      const { name, items, displayMethod } = req.body;

      const alreadyExists = await Seating.findOne({ where: { name } });
      if (alreadyExists) {
        return next(ApiError.duplicateName(SeatingController.errorSource));
      }

      const preview = await Seating.create({ name, items, displayMethod });
      return res.json(preview);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SeatingController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const previews = await Seating.findAll();
      return res.json(previews);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SeatingController.errorSource)
      );
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const preview = await Seating.findOne({ where: { id } });

      return res.json(preview);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SeatingController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const preview = await Seating.findOne({ where: { id } });

      preview.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, SeatingController.errorSource)
      );
    }
  }
}

module.exports = new SeatingController();

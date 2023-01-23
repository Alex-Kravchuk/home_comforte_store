const ApiError = require("../error/ApiError");
const { Rating } = require("../models/models");

class RatingController {
  static errorSource = "rating controller";

  async create(req, res, next) {
    try {
      const { userId, furnitureId, additionalVariantId } = req.body;
      // without duplicate checking. User can rate a product many times
      const rating = await Rating.create({
        userId,
        furnitureId,
        additionalVariantId,
      });

      return res.json(rating);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, RatingController.errorSource)
      );
    }
  }

  async getFurnitureRating(req, res, next) {
    try {
      const { id } = req.params;
      let ratings;
      ratings = await Rating.findAll({ where: { furnitureId: id } });

      if (!ratings.length) {
        ratings = await Rating.findAll({ where: { additionalVariantId: id } });
      }

      const sumOfRatingValues = ratings.reduce(
        (acc, curr) => acc + curr.rating,
        0
      );
      const averageValueRating = sumOfRatingValues / ratings.length;

      return res.json({ averageValueRating });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, RatingController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const rating = await Rating.findOne({ where: { id } });
      rating.destroy();

      return res.json({ message: "delete" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, RatingController.errorSource)
      );
    }
  }
}

module.exports = new RatingController();

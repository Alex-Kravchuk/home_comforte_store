const ApiError = require("../error/ApiError");
const { Rating, Furniture, AdditionalVariant } = require("../models/models");

class RatingController {
  static errorSource = "rating controller";

  async create(req, res, next) {
    try {
      const { rating, userId, furnitureId, additionalVariantId } = req.body;
      // without duplicate checking. User can rate a product many times
      const _rating = await Rating.create({
        rating,
        userId,
        furnitureId,
        additionalVariantId,
      });

      // for current updating furniture
      let ratings;
      let currentFurniture;

      if (furnitureId !== undefined) {
        ratings = await Rating.findAll({ where: { furnitureId } });
        currentFurniture = await Furniture.findOne({
          where: { id: furnitureId },
        });
      } else {
        ratings = await Rating.findAll({ where: { additionalVariantId } });
        currentFurniture = await AdditionalVariant.findOne({
          where: { id: additionalVariantId },
        });
      }

      const sumOfRatingValues = ratings.reduce(
        (acc, curr) => acc + curr.rating,
        0
      );

      const averageValueRating = sumOfRatingValues / ratings.length;
      currentFurniture.update({
        rating: averageValueRating.toFixed(1),
      });

      return res.json(_rating);
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

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, RatingController.errorSource)
      );
    }
  }
}

module.exports = new RatingController();

const ApiError = require("../error/ApiError");
const { Rating, Furniture, AdditionalVariant } = require("../models/models");

class RatingController {
  static errorSource = "rating controller";

  async create(req, res, next) {
    try {
      const { rating, userId, furnitureId } = req.body;
      // without duplicate checking. User can rate a product many times
      const _rating = await Rating.create({
        rating,
        userId,
        furnitureId,
      });

      // for current updating furniture
      let ratings;
      let currentFurniture;

    
        ratings = await Rating.findAll({ where: { furnitureId } });
        currentFurniture = await Furniture.findOne({
          where: { id: furnitureId },
        });
     

      const sumOfRatingValues = ratings.reduce(
        (acc, curr) => acc + curr.rating,
        0
      );

      // getting all rating values of current furniture
      // and to find average value for updating current furniture
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

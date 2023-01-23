const createImgName = require("../helpers/createImgName");
const ApiError = require("../error/ApiError");
const { Review } = require("../models/models");

class ReviewController {
  static errorSource = "review controller";
  async create(req, res, next) {
    try {
      let filesNames;
      const {
        name,
        userId,
        furnitureId,
        additionalVariantId,
        date,
        review_title,
        review_body,
        rating,
      } = req.body;

      if (req.files) {
        const { img } = req.files;

        filesNames = createImgName(img, "ARRAY");
      }

      const review = await Review.create({
        name,
        userId,
        furnitureId,
        additionalVariantId,
        date,
        review_body,
        review_title,
        rating,
        img: filesNames,
      });

      return res.json(review);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ReviewController.errorSource)
      );
    }
  }

  async getAllFurnitureReviews(req, res, next) {
    try {
      const { id } = req.params;
      let reviews;
      reviews = await Review.findAndCountAll({ where: { furnitureId: id } });
      if (!reviews.length) {
        reviews = await Review.findAndCountAll({
          where: { additionalVariantId: id },
        });
      }

      return res.json(reviews);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ReviewController.errorSource)
      );
    }
  }

  async getAllUserReviews(req, res, next) {
    try {
      const { id } = req.params;
      const reviews = await Review.findAndCountAll({ where: { userId: id } });
      return res.json(reviews);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ReviewController.errorSource)
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const review = await Review.findOne({ where: { id } });
      return res.json(review);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ReviewController.errorSource)
      );
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const review = await Review.findOne({ where: { id } });
      review.destroy();

      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, ReviewController.errorSource)
      );
    }
  }
}

module.exports = new ReviewController();

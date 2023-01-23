const Router = require("express");
const router = new Router();

const reviewController = require("../controllers/reviewController");

const createReviewMiddleware = require("../middleware/review/createReviewMiddleware");
const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");

router.post("/", createReviewMiddleware, reviewController.create);

router.get(
  "/furniture_id/:id",
  checkCorrectIDMiddleware("review"),
  reviewController.getAllFurnitureReviews
);

router.get("/:id", checkCorrectIDMiddleware("review"), reviewController.getOne);

router.delete(
  "/:id",
  checkCorrectIDMiddleware("review"),
  reviewController.delete
);

module.exports = router;

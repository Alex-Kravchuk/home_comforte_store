const Router = require("express");
const router = new Router();

const ratingController = require("../controllers/ratingController");
const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const createRatingMiddleware = require("../middleware/rating/createRatingMiddleware");

router.post("/", createRatingMiddleware, ratingController.create);
router.delete(
  "/furniture_rating/:id",
  checkCorrectIDMiddleware("rating"),
  ratingController.delete
);

module.exports = router;

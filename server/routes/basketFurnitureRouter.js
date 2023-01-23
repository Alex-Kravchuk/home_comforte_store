const Router = require("express");

const router = new Router();

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const basketFurnitureController = require("../controllers/basketFurnitureController");
const createBasketFurnitureMiddleware = require("../middleware/basketFurnitre/createBasketFurnitureMiddleware");

router.post(
  "/",
  createBasketFurnitureMiddleware,
  basketFurnitureController.create
);

router.get(
  "/:id",
  checkCorrectIDMiddleware("basket furniture"),
  basketFurnitureController.getAll
);

module.exports = router;

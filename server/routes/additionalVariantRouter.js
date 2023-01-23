const Router = require("express");

const router = new Router();

const additionalVariantController = require("../controllers/additionalVariantController");
const createFurnitureMiddleware = require("../middleware/furniture/createFurnitureMiddleware");
const checkCorrectIdMiddleware = require("../middleware/checkCorrectIdMiddleware");

router.post("/", createFurnitureMiddleware, additionalVariantController.create);
router.get(
  "/:id",
  checkCorrectIdMiddleware("additional variant"),
  additionalVariantController.getOne
);
router.put(
  "/:id",
  checkCorrectIdMiddleware("additional variant"),
  additionalVariantController.update
);
router.delete(
  "/:id",
  checkCorrectIdMiddleware("additional variant"),
  additionalVariantController.delete
);

module.exports = router;

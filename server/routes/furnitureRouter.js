const Router = require("express");
const router = new Router();

const furnitureController = require("../controllers/furnitureController");
const createFurnitureMiddleware = require("../middleware/furniture/createFurnitureMiddleware");
const checkCorrectIdMiddleware = require("../middleware/checkCorrectIdMiddleware");

router.post("/", createFurnitureMiddleware, furnitureController.create);
router.get("/", furnitureController.getAll);
router.get(
  "/:id",
  checkCorrectIdMiddleware("furniture"),
  furnitureController.getOne
);
router.put(
  "/:id",
  checkCorrectIdMiddleware("furniture"),
  furnitureController.update
);
router.delete(
  "/:id",
  checkCorrectIdMiddleware("furniture"),
  furnitureController.delete
);

module.exports = router;

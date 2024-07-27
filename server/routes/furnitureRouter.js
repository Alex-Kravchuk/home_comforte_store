const Router = require("express");
const router = new Router();

const furnitureController = require("../controllers/furnitureController");
const createFurnitureMiddleware = require("../middleware/furniture/createFurnitureMiddleware");
const checkCorrectIdMiddleware = require("../middleware/checkCorrectIdMiddleware");




router.post("/getProductList",  furnitureController.getProductList);



router.post("/", createFurnitureMiddleware, furnitureController.create);
router.get("/", furnitureController.getAll);
router.get(
  "/:id",
  checkCorrectIdMiddleware("furniture"),
  furnitureController.getOne
);

router.get(
  "/collection/:id",
  checkCorrectIdMiddleware("furniture"),
  furnitureController.getAllByCollectionId
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

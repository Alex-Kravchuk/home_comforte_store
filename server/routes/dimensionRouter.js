const Router = require("express");
const router = new Router();

const dimensionController = require("../controllers/dimensionController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incReqDimensionDataMiddleware = require("../middleware/dimension/incReqDimensionDataMiddleware");

router.post("/", incReqDimensionDataMiddleware, dimensionController.create);
router.get("/", dimensionController.getAll);
router.get(
  "/:id",
  checkCorrectIDMiddleware("dimension"),
  dimensionController.getOne
);
router.delete(
  "/:id",
  checkCorrectIDMiddleware("dimension"),
  dimensionController.delete
);

module.exports = router;

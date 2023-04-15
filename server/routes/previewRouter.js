const Router = require("express");
const router = new Router();

const previewController = require("../controllers/previewController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incorrectRequestDataMiddleware = require("../middleware/incorrectRequestDataMiddleware");

router.post("/", incorrectRequestDataMiddleware, previewController.create);
router.get("/", previewController.getAll);
router.get(
  "/:id",
  checkCorrectIDMiddleware("preview"),
  previewController.getOne
);
router.delete(
  "/:id",
  checkCorrectIDMiddleware("preview"),
  previewController.delete
);

module.exports = router;

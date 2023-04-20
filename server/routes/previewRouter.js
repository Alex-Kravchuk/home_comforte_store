const Router = require("express");
const router = new Router();

const previewController = require("../controllers/previewController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incReqPreviewDataMiddleware = require("../middleware/preview/incReqPreviewDataMiddleware");

router.post("/", incReqPreviewDataMiddleware, previewController.create);

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

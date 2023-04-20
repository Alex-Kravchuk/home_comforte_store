const Router = require("express");
const router = new Router();

const modifierController = require("../controllers/modifierController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incReqModifierDataMiddleware = require("../middleware/modifier/incReqModifierDataMiddleware");
const modifierDataDisplayMethidMiddleware = require("../middleware/modifier/modifierDataDisplayMethidMiddleware");

router.post(
  "/",
  incReqModifierDataMiddleware,
  modifierDataDisplayMethidMiddleware,
  modifierController.create
);
router.get("/", modifierController.getAll);
router.get(
  "/:id",
  checkCorrectIDMiddleware("modifier"),
  modifierController.getOne
);
router.delete(
  "/:id",
  checkCorrectIDMiddleware("modifier"),
  modifierController.delete
);

module.exports = router;

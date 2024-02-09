const Router = require("express");
const router = new Router();

const modifierController = require("../controllers/modifierController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incReqModifierDataMiddleware = require("../middleware/modifier/incReqModifierDataMiddleware");

router.post("/", incReqModifierDataMiddleware, modifierController.create);

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

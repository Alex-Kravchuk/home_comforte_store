const Router = require("express");
const router = new Router();

const modifierController = require("../controllers/modifierController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incorrectRequestDataMiddleware = require("../middleware/incorrectRequestDataMiddleware");

router.post("/", incorrectRequestDataMiddleware, modifierController.create);
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

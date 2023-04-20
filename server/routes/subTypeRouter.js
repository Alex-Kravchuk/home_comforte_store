const Router = require("express");
const router = new Router();

const subTypeController = require("../controllers/subTypeController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incReqSubTypeDataMiddleware = require("../middleware/subType/incReqSubTypeDataMiddleware");

router.post("/", incReqSubTypeDataMiddleware, subTypeController.create);
router.get(
  "/:id",
  checkCorrectIDMiddleware("subType"),
  subTypeController.getAll
);
router.get(
  "/:id",
  checkCorrectIDMiddleware("subType"),
  subTypeController.getOne
);
router.delete(
  "/:id",
  checkCorrectIDMiddleware("subType"),
  subTypeController.delete
);

module.exports = router;

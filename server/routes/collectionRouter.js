const Router = require("express");
const router = new Router();

const collectionController = require("../controllers/collectionController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incorrectRequestDataMiddleware = require("../middleware/incorrectRequestDataMiddleware");

router.post("/", incorrectRequestDataMiddleware, collectionController.create);
router.get("/", collectionController.getAll);
router.get(
  "/:id",
  checkCorrectIDMiddleware("collection"),
  collectionController.getOne
);
router.delete(
  "/:id",
  checkCorrectIDMiddleware("collection"),
  collectionController.delete
);

module.exports = router;

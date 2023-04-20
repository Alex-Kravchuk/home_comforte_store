const Router = require("express");
const router = new Router();

const collectionController = require("../controllers/collectionController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incReqCollectionDataMiddleware = require("../middleware/collection/incReqCollectionDataMiddleware");

router.post("/", incReqCollectionDataMiddleware, collectionController.create);
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

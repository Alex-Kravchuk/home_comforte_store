const Router = require("express");
const router = new Router();

const purchaseHistoryController = require("../controllers/purchaseHistoryController");
const checkCorrectIdMiddleware = require("../middleware/checkCorrectIdMiddleware");
const createHistoryMiddleware = require("../middleware/pusrcahseHistory/createHistoryMiddleware");

router.post("/", createHistoryMiddleware, purchaseHistoryController.create);

router.get(
  "/:id",
  checkCorrectIdMiddleware("purchase history"),
  purchaseHistoryController.getOne
);

router.delete(
  "/:id",
  checkCorrectIdMiddleware("purchase history"),
  purchaseHistoryController.delete
);

module.exports = router;

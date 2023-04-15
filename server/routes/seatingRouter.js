const Router = require("express");
const router = new Router();

const seatingController = require("../controllers/seatingController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incorrectRequestDataMiddleware = require("../middleware/incorrectRequestDataMiddleware");

router.post("/", incorrectRequestDataMiddleware, seatingController.create);
router.get("/", seatingController.getAll);
router.get(
  "/:id",
  checkCorrectIDMiddleware("seating"),
  seatingController.getOne
);
router.delete(
  "/:id",
  checkCorrectIDMiddleware("seating"),
  seatingController.delete
);

module.exports = router;

const Router = require("express");
const router = new Router();

const categoryController = require("../controllers/categoryController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incorrectRequestDataMiddleware = require("../middleware/incorrectRequestDataMiddleware");

router.post(
  "/",
  incorrectRequestDataMiddleware("category"),
  categoryController.create
);

router.get("/", categoryController.getAll);

router.get(
  "/:id",
  checkCorrectIDMiddleware("category"),
  categoryController.getOne
);

router.delete(
  "/:id",
  checkCorrectIDMiddleware("category"),
  categoryController.delete
);

module.exports = router;

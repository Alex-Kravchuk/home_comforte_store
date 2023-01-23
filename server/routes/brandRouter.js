const Router = require("express");
const router = new Router();

const brandController = require("../controllers/brandController");
const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incorrectRequestDataMiddleware = require("../middleware/typeAndBrand/incorrectRequestDataMiddleware");

router.post("/", incorrectRequestDataMiddleware, brandController.create);
router.get("/", brandController.getAll);
router.get("/:id", checkCorrectIDMiddleware("brand"), brandController.getOne);
router.put("/:id", checkCorrectIDMiddleware("brand"), brandController.update);
router.delete(
  "/:id",
  checkCorrectIDMiddleware("brand"),
  brandController.delete
);

module.exports = router;

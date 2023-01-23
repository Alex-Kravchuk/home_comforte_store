const Router = require("express");
const router = new Router();

const typeController = require("../controllers/typeController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incorrectRequestDataMiddleware = require("../middleware/typeAndBrand/incorrectRequestDataMiddleware");


router.post("/", incorrectRequestDataMiddleware, typeController.create);
router.get("/", typeController.getAll);
router.get("/:id", checkCorrectIDMiddleware("type"), typeController.getOne);
router.delete("/:id", checkCorrectIDMiddleware("type"), typeController.delete);

module.exports = router;

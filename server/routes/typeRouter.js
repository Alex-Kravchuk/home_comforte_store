const Router = require("express");
const router = new Router();

const typeController = require("../controllers/typeController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const incReqTypeDataMiddleware = require("../middleware/type/incReqTypeDataMiddleware");

router.post("/", incReqTypeDataMiddleware, typeController.create);
router.get("/", typeController.getAll);
router.get("/:id", checkCorrectIDMiddleware("type"), typeController.getOne);
router.delete("/:id", checkCorrectIDMiddleware("type"), typeController.delete);

module.exports = router;

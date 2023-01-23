const Router = require("express");

const router = new Router();
const basketController = require("../controllers/basketController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");

router.post("/", basketController.create);
router.get("/:id", checkCorrectIDMiddleware("basket"), basketController.getOne);

module.exports = router;

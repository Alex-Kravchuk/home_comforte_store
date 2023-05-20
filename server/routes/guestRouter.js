const Router = require("express");

const router = new Router();
const guestController = require("../controllers/guestController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const checkGuestTokenMiddleware = require("../middleware/guestMiddleware/checkGuestTokenMiddleware");

router.post("/create", guestController.create);
router.get("/:id", checkCorrectIDMiddleware("guest"), guestController.getOne);

module.exports = router;

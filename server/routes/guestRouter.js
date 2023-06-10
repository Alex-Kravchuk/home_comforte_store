const Router = require("express");

const router = new Router();
const guestController = require("../controllers/guestController");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");
const checkGuestTokenMiddleware = require("../middleware/guestMiddleware/checkGuestTokenMiddleware");

router.post("/create", guestController.create);
router.post("/delete", guestController.removeGuest);

module.exports = router;

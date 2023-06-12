const Router = require("express");

const router = new Router();
const guestController = require("../controllers/guestController");

router.post("/create", guestController.create);
router.post("/delete", guestController.removeGuest);

module.exports = router;

const Router = require("express");
const router = new Router();

const userController = require("../controllers/userController");

const authUserMiddleware = require("../middleware/user/authUserMiddleware");
const checkUserMiddleware = require("../middleware/user/checkUserMiddleware");
const signUpUserMiddleware = require("../middleware/user/signUpUserMiddleware");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");

router.post("/login", userController.logIn);
router.post("/auth", checkUserMiddleware("ADMIN"), userController.check);
router.post("/signup", signUpUserMiddleware, userController.signUp);
router.get("/:id", checkCorrectIDMiddleware("user"), userController.getOne);
router.put(
  "/:id",
  checkCorrectIDMiddleware("user"),
  signUpUserMiddleware,
  userController.update
);
router.delete("/:id", checkCorrectIDMiddleware("user"), userController.delete);

module.exports = router;

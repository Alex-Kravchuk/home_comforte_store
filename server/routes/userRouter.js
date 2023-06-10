const Router = require("express");
const router = new Router();

const userController = require("../controllers/userController");

const authMiddleware = require("../middleware/user/authMiddleware");
const checkUserMiddleware = require("../middleware/user/checkUserMiddleware");
const signUpUserMiddleware = require("../middleware/user/signUpUserMiddleware");

const checkCorrectIDMiddleware = require("../middleware/checkCorrectIdMiddleware");

router.post("/login", userController.logIn);
router.post("/signup", signUpUserMiddleware, userController.signUp);
router.get("/refresh", userController.refresh);
router.get("/logout", userController.logOut);
router.post("/forgot-password", userController.forgotPassword);
router.post("/reset-password", userController.resetPassword);

router.get("/auth", authMiddleware, userController.checkAuth);

router.get("/:id", checkCorrectIDMiddleware("user"), userController.getOne);
router.put(
  "/:id",
  checkCorrectIDMiddleware("user"),
  signUpUserMiddleware,
  userController.update
);
router.delete("/:id", checkCorrectIDMiddleware("user"), userController.delete);

module.exports = router;

const Router = require("express");
const router = new Router();

const userController = require("../controllers/userController");

const authMiddleware = require("../middleware/user/authMiddleware");

const signUpUserMiddleware = require("../middleware/user/signUpUserMiddleware");

router.post("/login", userController.logIn);
router.get("/logout", userController.logOut);
router.get("/refresh", userController.refresh);
router.post("/reset-password", userController.resetPassword);
router.put("/update", authMiddleware, userController.update);
router.get("/auth", authMiddleware, userController.checkAuth);
router.post("/forgot-password", userController.forgotPassword);
router.post("/signup", signUpUserMiddleware, userController.signUp);

router.post("/test", authMiddleware, userController.testUploading);

// router.get("/:id", checkCorrectIDMiddleware("user"), userController.getOne);

// router.delete("/:id", checkCorrectIDMiddleware("user"), userController.delete);

module.exports = router;

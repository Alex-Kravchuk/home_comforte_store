const Router = require("express");
const router = new Router();

const viewerController = require("../controllers/viewerController");

const createViewerMiddleware = require("../middleware/viewer/createViewerMiddleware");

router.post("/", createViewerMiddleware, viewerController.create);
router.get("/", viewerController.getByQueryParams);

module.exports = router;

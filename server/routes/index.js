const Router = require("express");

const router = new Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const ratingRouter = require("./ratingRouter");
const reviewRouter = require("./reviewRouter");
const basketRouter = require("./basketRouter");
const furnitureRouter = require("./furnitureRouter");
const purchaseHistory = require("./purchaseHistoryRouter");
const collectionRouter = require("./collectionRouter");
const dimensionRouter = require("./dimensionRouter");
const subTypeRouter = require("./subTypeRouter");
const categoryRouter = require("./categoryRouter");
const modifierRouter = require("./modifierRouter");
const previewRouter = require("./previewRouter");
const basketFurnitureRouter = require("./basketFurnitureRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/rating", ratingRouter);
router.use("/review", reviewRouter);
router.use("/basket", basketRouter);
router.use("/furniture", furnitureRouter);
router.use("/purchase_history", purchaseHistory);
router.use("/basket_furniture", basketFurnitureRouter);
router.use("/collection", collectionRouter);
router.use("/dimension", dimensionRouter);
router.use("/subType", subTypeRouter);
router.use("/category", categoryRouter);
router.use("/modifier", modifierRouter);
router.use("/preview", previewRouter);

module.exports = router;

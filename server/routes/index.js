const Router = require("express");

const router = new Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const adminRouter = require("./adminRouter");
const guestRouter = require("./guestRouter");
const ratingRouter = require("./ratingRouter");
const viewerRouter = require("./viewerRouter");
const reviewRouter = require("./reviewRouter");
const basketRouter = require("./basketRouter");
const subTypeRouter = require("./subTypeRouter");
const previewRouter = require("./previewRouter");
const categoryRouter = require("./categoryRouter");
const modifierRouter = require("./modifierRouter");
const furnitureRouter = require("./furnitureRouter");
const dimensionRouter = require("./dimensionRouter");
const collectionRouter = require("./collectionRouter");
const purchaseHistory = require("./purchaseHistoryRouter");
const basketFurnitureRouter = require("./basketFurnitureRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/admin", adminRouter);
router.use("/guest", guestRouter);
router.use("/rating", ratingRouter);
router.use('/viewer', viewerRouter);
router.use("/review", reviewRouter);
router.use("/basket", basketRouter);
router.use("/subtype", subTypeRouter);
router.use("/preview", previewRouter);
router.use("/category", categoryRouter);
router.use("/modifier", modifierRouter);
router.use("/furniture", furnitureRouter);
router.use("/dimension", dimensionRouter);
router.use("/collection", collectionRouter);
router.use("/purchase_history", purchaseHistory);
router.use("/basket_furniture", basketFurnitureRouter);

module.exports = router;

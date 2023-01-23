const Router = require("express");

const router = new Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const brandRouter = require("./brandRouter");
const ratingRouter = require("./ratingRouter");
const reviewRouter = require("./reviewRouter");
const basketRouter = require("./basketRouter");
const furnitureRouter = require("./furnitureRouter");
const purchaseHistory = require("./purchaseHistoryRouter");
const addVariantRouter = require("./additionalVariantRouter");
const basketFurnitureRouter = require("./basketFurnitureRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/rating", ratingRouter);
router.use("/review", reviewRouter);
router.use("/basket", basketRouter);
router.use("/furniture", furnitureRouter);
router.use("/purchase_history", purchaseHistory);
router.use("/additional_variant", addVariantRouter);
router.use("/basket_furniture", basketFurnitureRouter);

module.exports = router;

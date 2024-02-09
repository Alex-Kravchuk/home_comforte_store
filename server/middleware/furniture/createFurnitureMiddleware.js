const ApiError = require("../../error/ApiError");
const { Furniture, Type, Category, SubType } = require("../../models/models");

module.exports = async function (req, res, next) {
  const errorSource = "furniture controller";
  try {
    const { name, typeId, description, subTypeId, categoryId, price } =
      req.body;

    console.log("====================================");
    console.log(req.body);
    console.log("====================================");

    const allDataAreGiven =
      name && typeId && description && price && subTypeId && categoryId;

    if (!allDataAreGiven) {
      return next(ApiError.requestDataAreNotDefined(null, errorSource));
    }

    const type = await Type.findOne({ where: { id: typeId } });
    const subtype = await SubType.findOne({ where: { id: subTypeId } });
    const category = await Category.findOne({ where: { id: categoryId } });

    if (!type || !subtype || !category) {
      return next(
        ApiError.badRequest(
          "Cannot add product, because such type/subtype/category not exist",
          errorSource
        )
      );
    }

    // name checking
    if (name) {
      const furniture = await Furniture.findOne({ where: { name } });

      if (furniture) {
        return next(ApiError.duplicate("name", errorSource));
      }
    }

    next();
  } catch (error) {
    return next(ApiError.unexpectedError(error, errorSource));
  }
};

const createImgName = require("../assets/createImgName");
const ApiError = require("../error/ApiError");

const { Furniture, Rating } = require("../models/models");

class FurnitureController {
  static errorSource = "furniture controller";
  async create(req, res, next) {
    try {
      let dimensionImgName;
      let filesNames;

      const {
        name,
        typeId,
        brandId,
        description,
        price,
        material_info,
        dimension_info,
        modifier_info,
      } = req.body;

      // here needs some material image
      const duplicateName = await Furniture.findOne({ where: { name } });
      if (duplicateName) {
        return next(ApiError.duplicateName(FurnitureController.errorSource));
      }

      if (req.files) {
        const { img: images, dimension_img, material_img } = req.files;

         dimensionImgName = createImgName(dimension_img, "STRING");
         filesNames = createImgName(images, "ARRAY");
      }

      //here I need to do json.parse

      const materialInfoMOCK = {
        data: [
          {
            title: "Leg Frame",
            desription: "Side Legs: Plastic Leg; Middle Legs: Solid Wood",
          },
          { title: "Frame", desription: "Plywood" },
          { title: "Frame", desription: "Plywood" },
          { title: "Frame", desription: "Plywood" },
          {
            title: "Fabric Composition",
            desription: "95% Polyester and 5% Acrylic",
          },
          { title: "Care", desription: "Upholstered Seating" },
          { title: "Prop65 Warning", desription: "Formaldehyde" },
          { title: "Frame", desription: "Plywood" },
          { title: "Frame", desription: "Plywood" },
        ],
      };

      const dimensionInfoMOCK = {
        data: [
          { title: "Dimension", desription: "W82.7' x D89.8' x H47.2'" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
        ],
        img: dimensionImgName,
      };

      const modifierInfoMOCK = {
        data: [
          {
            title: "Model",
            values: [
              { name: "Storm Gray", add_variant_Id: 1 },
              { name: "Snow", add_variant_Id: 2 },
            ],
          },
          {
            title: "Size",
            values: [
              { name: "Queen", add_variant_Id: 1 },
              { name: "Middle", add_variant_Id: 2 },
              { name: "King", add_variant_Id: 3 },
            ],
          },
          {
            title: "Material",
            values: [
              {
                name: "Indigo Blue",
                fabric: "80% poliester",
                care: "take care boy",
                add_variant_Id: 1,
                img: "",
              },
              {
                name: "Ivory Beige",
                fabric: "80% poliester, 20% linen",
                care: "something washing",
                add_variant_Id: 2,
                img: "",
              },
              {
                name: "Ivory White",
                fabric: "80% poliester, 10% nylon",
                care: "something washing2222",
                add_variant_Id: 3,
                img: "",
              },
              {
                name: "Ocean Blue",
                fabric: "88% poliester, 20% linen",
                care: "something washing33333",
                add_variant_Id: 4,
                img: "",
              },
              {
                name: "Forest Green",
                fabric: "100% poliester",
                care: "something washing3333312123",
                add_variant_Id: 5,
                img: "",
              },
            ],
          },

          {
            tittle: "Quantity",
            values: [
              { name: "Single", add_variant_Id: 1 },
              { name: "Set of 2", add_variant_Id: 2 },
            ],
          },
        ],
      };

      const furniture = await Furniture.create({
        name,
        typeId,
        brandId,
        description,
        price,
        img: filesNames,
        material_info: materialInfoMOCK,
        dimension_info: dimensionInfoMOCK,
        modifier_info: modifierInfoMOCK,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 3;
      const offset = page * limit - limit;

      let furnitures;

      if (!brandId && !typeId) {
        furnitures = await Furniture.findAndCountAll({ limit, offset });
      }

      if (brandId && !typeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }

      if (!brandId && typeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }

      if (brandId && typeId) {
        furnitures = await Furniture.findAndCountAll({
          where: { typeId, brandId },
          limit,
          offset,
        });
      }

      return res.json(furnitures);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const furniture = await Furniture.findOne({ where: { id } });
      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async update(req, res, next) {
    try {
      let dimensionImgName;
      let filesNames;

      const {
        name,
        rating,
        description,
        price,
        material_info,
        dimension_info,
        modifier_info,
      } = req.body;

      const { id } = req.params;

      if (req.files) {
        const { img: images, dimension_img, material_img } = req.files;

        dimensionImgName = createImgName(dimension_img, "STRING");
        filesNames = createImgName(images, "ARRAY");
      }

      const furniture = await Furniture.findOne({ where: { id } });

      const materialInfoMOCK = {
        data: [
          {
            title: "Leg Frame",
            desription: "Side Legs: Plastic Leg; Middle Legs: Solid Wood",
          },
          { title: "Frame", desription: "Plywood" },
          { title: "Frame", desription: "Plywood" },
          { title: "Frame", desription: "Plywood" },
          {
            title: "Fabric Composition",
            desription: "95% Polyester and 5% Acrylic",
          },
          { title: "Care", desription: "Upholstered Seating" },
          { title: "Prop65 Warning", desription: "Formaldehyde" },
          { title: "Frame", desription: "Plywood" },
          { title: "Frame", desription: "Plywood" },
        ],
      };

      const dimensionInfoMOCK = {
        data: [
          { title: "Dimension", desription: "W82.7' x D89.8' x H47.2'" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
          { title: "Product Weight", desription: "179.5 lbs" },
        ],
        img: dimensionImgName,
      };

      const modifierInfoMOCK = {
        data: [
          {
            title: "Model",
            values: [
              { name: "Storm Gray", add_variant_Id: 1 },
              { name: "Snow", add_variant_Id: 2 },
            ],
          },
          {
            title: "Size",
            values: [
              { name: "Queen", add_variant_Id: 1 },
              { name: "Middle", add_variant_Id: 2 },
              { name: "King", add_variant_Id: 3 },
            ],
          },
          {
            title: "Material",
            values: [
              {
                name: "Indigo Blue",
                fabric: "80% poliester",
                care: "take care boy",
                add_variant_Id: 1,
                img: "",
              },
              {
                name: "Ivory Beige",
                fabric: "80% poliester, 20% linen",
                care: "something washing",
                add_variant_Id: 2,
                img: "",
              },
              {
                name: "Ivory White",
                fabric: "80% poliester, 10% nylon",
                care: "something washing2222",
                add_variant_Id: 3,
                img: "",
              },
              {
                name: "Ocean Blue",
                fabric: "88% poliester, 20% linen",
                care: "something washing33333",
                add_variant_Id: 4,
                img: "",
              },
              {
                name: "Forest Green",
                fabric: "100% poliester",
                care: "something washing3333312123",
                add_variant_Id: 5,
                img: "",
              },
            ],
          },

          {
            tittle: "Quantity",
            values: [
              { name: "Single", add_variant_Id: 1 },
              { name: "Set of 2", add_variant_Id: 2 },
            ],
          },
        ],
      };

      furniture.update({
        name,
        rating,
        description,
        price,
        material_info,
        // it is MOCK data
        dimension_info: dimensionInfoMOCK,
        modifier_info,
        img: filesNames,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, FurnitureController.errorSource)
      );
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const furniture = await Furniture.findOne({ where: { id } });
      furniture.destroy();
      return res.json({ message: "deleted" });
    } catch (error) {
      return next(ApiError.unexpectedError(FurnitureController.errorSource));
    }
  }
}

module.exports = new FurnitureController();

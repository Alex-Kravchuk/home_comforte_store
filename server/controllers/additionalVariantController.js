const createImgName = require("../helpers/createImgName");
const ApiError = require("../error/ApiError");
const { AdditionalVariant } = require("../models/models");

class AdditionalVariantController {
  static errorSource = "additional variant furniture controller";

  async create(req, res, next) {
    try {
      let dimensionImgName;
      let filesNames;

      const {
        furnitureId,
        name,
        rating,
        typeId,
        brandId,
        description,
        price,
        material_info,
        dimension_info,
      } = req.body;

      const duplicateName = await AdditionalVariant.findOne({
        where: { name },
      });

      if (duplicateName) {
        return next(
          ApiError.duplicateName(AdditionalVariantController.errorSource)
        );
      }

      if (req.files) {
        const { img: images, dimension_img } = req.files;

        dimensionImgName = createImgName(dimension_img, "STRING");
        filesNames = createImgName(images, "ARRAY");
      }

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

      const furniture = await AdditionalVariant.create({
        furnitureId,
        name,
        rating,
        typeId,
        brandId,
        description,
        price,
        img: filesNames,
        material_info: materialInfoMOCK,
        dimension_info: dimensionInfoMOCK,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const furniture = await AdditionalVariant.findOne({ where: { id } });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
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
      } = req.body;

      const { id } = req.params;

      if (req.files) {
        const { img: images, dimension_img } = req.files;

        dimensionImgName = createImgName(dimension_img, "STRING");
        filesNames = createImgName(images, "ARRAY");
      }

      // TODO dimenisonImgName will be use in dimension_inso object

      const furniture = await AdditionalVariant.findOne({ where: { id } });

      furniture.update({
        name,
        rating,
        description,
        price,
        img: filesNames,
        material_info,
        dimension_info,
      });

      return res.json(furniture);
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const furniture = await AdditionalVariant.findOne({ where: { id } });
      furniture.destroy();
      return res.json({ message: "deleted" });
    } catch (error) {
      return next(
        ApiError.unexpectedError(error, AdditionalVariantController.errorSource)
      );
    }
  }
}

module.exports = new AdditionalVariantController();

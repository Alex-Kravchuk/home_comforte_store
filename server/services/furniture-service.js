const ApiError = require("../error/ApiError");
const createImgName = require("../helpers/createImgName");
const {
  Furniture,
  Dimension,
  Modifier,
  Viewer,
  Preview,
} = require("../models/models");

const fs = require("fs");
const uuid = require("uuid");

class FurnitureService {
  static errorSource = "furniture service";

  async createFurniture(data) {
    const {
      name,
      typeId,
      categoryId,
      subTypeId,
      collectionId,
      description,
      price,
    } = data;

    const furniture = await Furniture.create({
      name,
      typeId,
      categoryId,
      subTypeId,
      collectionId,
      description,
      price: Number(price),
    });

    return furniture;
  }

  async createFurnitureDimenions(req) {
    let fileName;
    const { furnitureId, details } = req.body;

    const detailsParse = JSON.parse(details);

    if (req.files) {
      const { img } = req.files;
      fileName = createImgName(img, "STRING");
    }

    const dimension = await Dimension.create({
      furnitureId,
      img: fileName,
      details: detailsParse,
    });

    return dimension;
  }

  async createModifiers(data, furnitureId) {
    const modifiers = [];
    const regExpTemplate = /^data:image\/\w+;base64,/; // meta info base64

    const preparedData = data.map((mod) => {
      const modItems = JSON.parse(mod.items);
      modItems.forEach((item) => {
        if (item.hasOwnProperty("img")) {
          // remove meta info from base64 string
          item.img = item.img?.replace(regExpTemplate, "") ?? null;
        }
      });

      mod.items = modItems;
      return mod;
    });

    // use "for of" cycle, because async task
    for (const mod of preparedData) {
      const { displayMethod, name, noAffectToDisplay, items } = mod;
      const updatedItems = [];

      items.forEach((item) => {
        if (item.img) {
          let fileName = uuid.v4() + ".jpg";
          fs.writeFile(
            `./static/${fileName}`,
            item.img,
            { encoding: "base64" },
            (err) => {
              if (err) {
                console.log("Error from file system writing:", err.message);
              } else {
                console.log("File was successfully added");
              }
            }
          );

          updatedItems.push({ ...item, img: fileName });
        } else {
          updatedItems.push({ ...item });
        }
      });

      const modifier = await Modifier.create({
        name,
        furnitureId,
        displayMethod,
        noAffectToDisplay,
        items: updatedItems,
      });

      modifiers.push(modifier);
    }

    return modifiers;
  }

  async createFurnitureViewer(options, furnitureId, images) {
    if (Array.isArray(options)) {
      const viewers = [];
      for (const option of options) {
        const imagesWithCurrentOption = images.filter((img) => {
          // we use regular expression, because in each image File the name field is option object in JSON format
          // but all of " symbols replaced to %22 (I DON'T KNOW WHY), so I do replace by regexp like this
          // for coorect work JSON parse
          const jsonOptionName = img.name.replace(/%22/g, '"');
          if (jsonOptionName === option) return img;
        });

        const fileNames = createImgName(imagesWithCurrentOption, "ARRAY");

        const viewer = await Viewer.create({
          furnitureId,
          images: fileNames,
          options: JSON.parse(option),
        });

        viewers.push(viewer);
      }

      return viewers;
    }

    // if options is not array, it is mean there is only one option as JSON object
    // and in accordance an images array only with this option
    const fileNames = createImgName(images, "ARRAY");

    const viewer = await Viewer.create({
      furnitureId,
      images: fileNames,
      options: JSON.parse(options),
    });

    return viewer;
  }

  async getViewerDataByQueryParams(options) {
    const viewer = await Viewer.findOne({ where: { options } });

    return viewer;
  }

  async createFurniturePreview(images, furnitureId) {
    console.log("furniture IDDDDDD", images);

    const content = Array.from(images).map((image) => {
      // img.name is descriptions for preview image from client
      const img = createImgName(image, "STRING");
      const description = image.name === "no description" ? "" : image.name;

      console.log("description:", description);
      console.log("image:", img);

      return { description: description, img: img };
    });

    console.log("CONTENT", content);

    const preview = await Preview.create({
      furnitureId,
      content,
    });

    return preview;
  }
}

module.exports = new FurnitureService();

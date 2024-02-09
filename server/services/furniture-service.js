const ApiError = require("../error/ApiError");
const createImgName = require("../helpers/createImgName");
const { Furniture, Dimension, Modifier } = require("../models/models");

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

    console.log("================inside furniture service====================");
    console.log(data);
    console.log(furnitureId);
    console.log("================inside furniture service====================");

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
}

module.exports = new FurnitureService();

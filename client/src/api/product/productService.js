import axios from "axios";
import { $host } from "..";
import { asyncGetBase64 } from "../../helpers/getBase64";

// get menu data

export class ProductService {
  static getAllCategories = async () => {
    try {
      let types = [];
      let subTypes = [];
      let categories = [];

      const combineTypesSubtypes = async (types) => {
        let newTypes = [];

        // repeat the request with each element of the array
        // and push each response to the subTypes array
        for (const type of types) {
          const response_subtype = await $host.get(`api/subType/${type.id}`);
          subTypes.push(...response_subtype.data);
        }

        for (let type of types) {
          const { img, id, categoryId, name } = type;

          const newItem = {
            id,
            img,
            categoryId,
            name,
            subTypes: subTypes.filter(({ typeId }) => typeId === id),
          };

          newTypes.push(newItem);
        }

        return newTypes;
      };

      categories = await $host.get("api/category").then((resp) => resp.data);
      types = await $host.get("api/type").then((resp) => resp.data);

      const newTypes = await combineTypesSubtypes(types);

      categories.forEach(({ id }, index) => {
        const categoryTypes = [];
        newTypes.forEach((element) => {
          if (element.categoryId === id) {
            categoryTypes.push(element);
          }

          categories[index].types = categoryTypes;
        });
      });

      return categories;
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  static createCategory = async (name) => {
    const response = await $host.post("api/category", { name });
    return response;
  };

  static createType = async (newTypeData) => {
    const response = await $host.post("api/type", newTypeData);
    return response;
  };

  static createSubType = async (name, typeId) => {
    const response = await $host.post("api/subtype", { name, typeId });
    return response;
  };

  static updateCategories = async (data) => {
    const response = await $host.put("api/category/update", { data });
    return response;
  };

  static createProduct = async (data) => {
    const { name, price, description, category, type, subtype } = data;
    const response = await $host.post("api/furniture", {
      name,
      price,
      description,
      typeId: type,
      subTypeId: subtype,
      categoryId: category,
    });
    return response.data;
  };

  static createProductDimension = async (data) => {
    const formData = new FormData();

    console.log("suk", data);

    for (const key in data) {
      const element = data[key];

      formData.append(key, element);
    }

    const response = await $host.post("api/dimension", formData);
    return response.data;
  };

  static createProductModifier = async (data, productId) => {
    // preparing data for request
    // default customization data has File object inside and url in base64 format
    // {...img: {originalFileObj: File, url: [base64 string]}
    // so we need remove File object from data for request and leave only base64 url
    // I use base64 string on server side, convert it and write to static folder

    const formData = new FormData();

    // we make copy of each part of customization data for request,
    // because we remove img from original data

    const preparedData = data.map((mod) => {
      const modCopy = JSON.parse(JSON.stringify(mod));

      const updatedItems = mod.items.map((item) => {
        if (!item.img) {
          return item;
        }

        const itemCopy = Object.assign({}, item);
        const imageNameConfig = { modifierID: mod.id, modifierItemID: item.id };

        const itemFile = item.img.originalFileObj;

        // Tile type modifier always has img field, but can be use without img
        if (item.hasOwnProperty("img")) {
          formData.append("images", itemFile, JSON.stringify(imageNameConfig));
        }

        delete itemCopy.img;

        return itemCopy;
      });

      modCopy.items = updatedItems;
      return modCopy;
    });

    formData.append("data", JSON.stringify(preparedData));
    formData.append("furnitureId", productId);

    const response = await $host.post("api/modifier", formData);
    return response.data;
  };

  static createProductViewer = async (data, productId) => {
    const preparedImagesData = data.map((item) => ({
      ...item,
      images: item.images.map((img) => img.originalFileObj),
    }));

    const formdata = new FormData();

    // console.log("prepared images", preparedImagesData);

    formdata.append("furnitureId", productId);

    preparedImagesData.forEach((item) => {
      formdata.append("options", item.options);
      item.images.forEach((img) => {
        formdata.append("images", img, item.options);
      });
    });

    const response = await $host.post("api/viewer", formdata);
    return response.data;
  };

  static createProductPreviewImage = async (data, productId) => {
    const formdata = new FormData();

    formdata.append("furnitureId", productId);

    console.log("sukaaaaa", data);

    data.forEach((prevItem) => {
      // write preview image description as a name in File object
      // for simplify data for request
      console.log("PREVI ITEM", prevItem);

      formdata.append(
        "images",
        prevItem.originalFileObj,
        // if prevItem doesn't have desctiprion, we pass such string for equal on the server side
        // and after true equal we pass emty string for such item in DB
        prevItem.description || "no description"
      );
    });

    const response = await $host.post("api/preview", formdata);
    return response.data;
  };
}

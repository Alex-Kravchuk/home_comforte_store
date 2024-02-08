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

    for (const key in data) {
      const element = data[key];
      formData.append(key, element);
    }

    const response = await $host.post("api/dimension", formData);
    return response;
  };

  static createProductModifier = async (data, productId) => {
    // preparing data for request
    // default customization data has File object inside and url in base64 format
    // {...img: {originalFileObj: File, url: [base64 string]}
    // so we need remove File object from data for request and leave only base64 url
    // I use base64 string on server side, convert it and write to static folder

    const preparedData = data.map((mod) => {
      const updatedItems = mod.items.map((item) => {
        if (item.hasOwnProperty("img")) {
          // Tile type modifier always has img field, but can be use without img
          item.img = item.img.url ?? null;
        }

        return item;
      });

      mod.items = JSON.stringify(updatedItems);
      return mod;
    });

    const response = await $host.post("api/modifier", {
      data: preparedData,
      furnitureId: productId,
    });
    return response;
  };
}

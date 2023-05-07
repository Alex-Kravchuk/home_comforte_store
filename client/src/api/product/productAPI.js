import axios from "axios";
import { $host } from "..";

// get menu data
export const getAllCategories = async () => {
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


export const createCategory = async (name) => {
  const response = await $host.post("api/category", { name });
  return response;
};
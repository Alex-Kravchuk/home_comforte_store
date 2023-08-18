import React, { useEffect, useState } from "react";

import { Collapse, Empty, Spin } from "antd";

import { ProductService } from "../../../../../../../../../api/product/productService";

import Label from "./Label/Label";

import {
  SubTypePanelName,
  OverviewCollapseWrapper,
  OverviewCollapseContainer,
} from "./OverviewCollapse.styled";
import { useDispatch, useSelector } from "react-redux";
import { saveUpdatedMenuData } from "../../../../../../../../../redux/loading/loadingSlice";

const OverviewCollapse = () => {
  const [categories, setCategories] = useState([]);
  const [collapseItems, setCollapseItems] = useState([]);
  const { data: menuData } = useSelector((state) => state.menuData);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const categoriesDataAreExist = categories?.length > 0;

  /**
   * @function prepareDataToRequest
   * I separate each category from the general categories object
   * and must make a request to the api for each route (category, type and subtype)
   */
  const prepareDataToRequest = async () => {
    try {
      const typesForRequest = [];
      const subtypesForRequest = [];

      categories.forEach((category) => {
        category.types.forEach((type) => {
          typesForRequest.push(type);
        });
      });

      typesForRequest.forEach((type) => {
        type.subTypes.forEach((subtype) => {
          subtypesForRequest.push(subtype);
        });
      });

      const response = await ProductService.updateCategories(categories);
      const updatedData = response.data.length === 0 ? menuData : response.data;
      dispatch(saveUpdatedMenuData(updatedData));
    } catch (error) {
      dispatch(saveUpdatedMenuData(menuData));
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const categories = await ProductService.getAllCategories();

        // debugger
        setCategories(categories);
      } catch (error) {
        setLoading(false);
        setError(error.response.data || error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
    console.log("in useEffect func", categories);
  }, []);

  /**
   * @function saveChanges
   * I make a nested loop of category and subcategory
   * and search for a match between the ID and the old name.
   * If an item has the same ID and name, I will give it a new name
   */

  const saveChanges = (id, oldName, newName) => {
    const copyCategories = categories.map((category) => {
      const categoryCoincidence =
        category.id === id && category.name === oldName;

      if (categoryCoincidence) {
        category.name = newName;
        return category;
      }

      category.types.map((type) => {
        const typeCoincidence = type.id === id && type.name === oldName;

        if (typeCoincidence) {
          type.name = newName;
          return type;
        }

        type.subTypes.map((subtype) => {
          const subtypeCoincidence =
            subtype.id === id && subtype.name === oldName;

          if (subtypeCoincidence) {
            subtype.name = newName;
            return subtype;
          }

          return subtype;
        });

        return type;
      });
      return category;
    });

    // console.log("new data", id, newName, oldName, copyCategories);

    setCategories(copyCategories);
  };

  /**
   * @function deleteCategory
   * I'm filtering each category and subcategory
   * and remove the item if its name matches the one that was clicked
   */
  const deleteCategory = (name) => {
    const filteredCategories = categories.filter(
      (category) => category.name !== name
    );

    const filteredData = filteredCategories.map((category) => {
      const filtredTypes = category.types.filter((type) => type.name !== name);

      const filtredSubTypes = filtredTypes.map((type) => {
        type.subTypes = type.subTypes.filter(
          (subtype) => subtype.name !== name
        );
        return type;
      });

      category.types = filtredSubTypes;
      return category;
    });

    setCategories(filteredData);
  };

  /**
   * @function separateCategoriesFromTypes
   *  Each category has a types field, and each type has a subtypes field.
   *  They may not have any elements.
   * ----------------------------------------------------------------------------------------
   *  I do nested nested looping of elements in this function;
   *  depending on whether the categories have corresponding subcategories,
   *  I form a child field of the items object. If some category has not a subtypes,
   *  I render <Empty /> component form ANT design to nested panel of <Collapse /> ANT design;
   *  ----------------------------------------------------------------------------------------
   *  I am using the <Label>{children}</Label> component to label the elements
   *  to display the edit and delete interface of each category and subcategory.
   */
  const separateCategoriesFromTypes = () => {
    const nestedPanels = categories.map((category) => ({
      key: category.id,
      label: (
        <Label
          confirmDelete={deleteCategory}
          confirmSave={saveChanges}
          item={category}
        >
          {category.name}
        </Label>
      ),
      children:
        category.types.length > 0 ? (
          <Collapse
            ghost
            items={category?.types.map((type) => ({
              key: type.id,
              label: (
                <Label
                  confirmDelete={deleteCategory}
                  confirmSave={saveChanges}
                  item={type}
                >
                  {type.name}
                </Label>
              ),
              children:
                type.subTypes.length > 0 ? (
                  type.subTypes.map((subtype) => (
                    <Label
                      key={subtype.name}
                      item={subtype}
                      confirmDelete={deleteCategory}
                      confirmSave={saveChanges}
                    >
                      <SubTypePanelName>{subtype.name}</SubTypePanelName>
                    </Label>
                  ))
                ) : (
                  <Empty
                    imageStyle={{
                      height: 60,
                    }}
                  />
                ),
            }))}
          />
        ) : (
          <Empty
            imageStyle={{
              height: 60,
            }}
          />
        ),
    }));

    setCollapseItems(nestedPanels);
  };

  useEffect(() => {
    separateCategoriesFromTypes();

    return () => {
      prepareDataToRequest(categories);
    };
  }, [categories]);

  return (
    <OverviewCollapseWrapper>
      <OverviewCollapseContainer loading={loading.toString()}>
        {!categoriesDataAreExist ? (
          <Empty />
        ) : loading ? (
          <Spin />
        ) : (
          <Collapse items={collapseItems} />
        )}
      </OverviewCollapseContainer>
    </OverviewCollapseWrapper>
  );
};

export default OverviewCollapse;

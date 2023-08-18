import React, { useEffect, useState } from "react";

import { Collapse, Empty, Spin } from "antd";

import { ProductService } from "../../../../../../../../../api/product/productService";

import {
  OverviewCollapseContainer,
  OverviewCollapseWrapper,
  SubTypePanelName,
} from "./OverviewCollapse.styled";
import Label from "./Label/Label";

const OverviewCollapse = () => {
  const [collapseItems, setCollapseItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const categories = await ProductService.getAllCategories();

        setCategories(categories);
      } catch (error) {
        setLoading(false);
        setError(error.response.data);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
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
  }, [categories]);

  console.log("Collapse render", categories);

  return (
    <OverviewCollapseWrapper>
      <OverviewCollapseContainer loading={loading.toString()}>
        {loading ? <Spin /> : <Collapse items={collapseItems} />}
      </OverviewCollapseContainer>
    </OverviewCollapseWrapper>
  );
};

export default OverviewCollapse;

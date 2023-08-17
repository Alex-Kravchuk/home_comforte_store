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

  const saveChanges = (id, oldName, newName) => {
    const copyCategories = categories.map((element) => {
      const coincidence = element.id === id && element.name === oldName;

      if (coincidence) {
        element.name = newName;

        // return;
      }

      return element;
    });

    console.log("new data", id, newName, oldName, copyCategories);

    setCategories(copyCategories);
  };
  const deleteCategory = () => {};

  const separateCategoriesFromTypes = () => {
    console.log("from zalupa", categories);

    const nestedPanels = categories.map((category) => {
      return {
        key: category.id,
        label: (
          <Label
            confirmDelete={deleteCategory}
            confirmSave={saveChanges}
            item={category}
          />
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
                  />
                ),
                children:
                  type.subTypes.length > 0 ? (
                    type.subTypes.map((subtype) => (
                      <SubTypePanelName key={subtype.name}>
                        {subtype.name}
                      </SubTypePanelName>
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
      };
    });

    setCollapseItems(nestedPanels);
  };

  useEffect(() => {
    console.log("ahuel");

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

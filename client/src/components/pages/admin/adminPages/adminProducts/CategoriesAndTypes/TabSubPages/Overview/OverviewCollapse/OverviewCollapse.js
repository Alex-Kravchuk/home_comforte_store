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

  useEffect(() => {
    separateCategoriesFromTypes();
  }, [categories]);

  const separateCategoriesFromTypes = () => {
    const nestedPanels = categories.map((category) => {
      // const subChildren = '';
      return {
        key: category.id,
        label: <Label>{category.name}</Label>,
        children: (
          <Collapse
            ghost
            items={category?.types.map(({ id, name, subTypes }) => ({
              key: id,
              label: <Label>{name}</Label>,
              children:
                subTypes.length > 0 ? (
                  subTypes.map((subtype) => (
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
        ),
      };
    });

    setCollapseItems(nestedPanels);
  };

  console.log("suka separ", collapseItems);

  return (
    <OverviewCollapseWrapper>
      <OverviewCollapseContainer loading={loading}>
        {loading ? <Spin /> : <Collapse items={collapseItems} />}
      </OverviewCollapseContainer>
    </OverviewCollapseWrapper>
  );
};

export default OverviewCollapse;

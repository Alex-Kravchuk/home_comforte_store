import React from "react";

import { Tabs } from "antd";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import Overview from "./Overview/Overview";
import AddProduct from "./AddProduct/AddProduct";

import { TabLabel, TabLabelText } from "../../AdminProducts.styled";

const tabItems = [
  {
    key: "1",
    label: <TabLabel>Overview</TabLabel>,
    children: <Overview />,
  },
  {
    key: "2",
    label: (
      <TabLabel>
        <AddOutlinedIcon />
        <TabLabelText>Add product</TabLabelText>
      </TabLabel>
    ),
    children: <AddProduct />,
  },
];

const EditProductsSubPages = () => {
  return <Tabs defaultActiveKey="1" items={tabItems} />;
};

export default EditProductsSubPages;

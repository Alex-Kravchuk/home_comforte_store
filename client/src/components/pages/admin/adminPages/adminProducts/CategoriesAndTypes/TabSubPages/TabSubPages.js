import React from "react";

import { Tabs } from "antd";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import Types from "./Types/Types";
import SubTypes from "./SubTypes/SubTypes";
import Overview from "../TabSubPages/Overview/Overview";
import Categories from "../TabSubPages/Categories/Categories";

import { TabLabel, TabLabelText } from "../TabSubPages/TabSubPages.styled";

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
        <TabLabelText>Add category</TabLabelText>
      </TabLabel>
    ),
    children: <Categories />,
  },
  {
    key: "3",
    label: (
      <TabLabel>
        <AddOutlinedIcon />
        <TabLabelText>Add type</TabLabelText>
      </TabLabel>
    ),

    children: <Types />,
  },
  {
    key: "4",
    label: (
      <TabLabel>
        <AddOutlinedIcon />
        <TabLabelText>Add subtype</TabLabelText>
      </TabLabel>
    ),

    children: <SubTypes />,
  },
];

const TabSubPages = () => {
  return <Tabs defaultActiveKey="1" items={tabItems} />;
};

export default TabSubPages;

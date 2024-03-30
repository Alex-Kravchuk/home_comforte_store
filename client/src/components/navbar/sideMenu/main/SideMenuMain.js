import React, { useState } from "react";

import { Collapse } from "antd";

import NestedCollapse from "./panel/NestedCollapse";

import { SideMenuItem, SideMenuContainer } from "./SideMenuMain.styled";
import { Link, useNavigate } from "react-router-dom";

const SideMenuMain = ({ menuData, closeHandler }) => {
  const [activeKey, setActiveKey] = useState([]);
  const navigate = useNavigate();

  const formate = (text) => text.split(" ").join("-").toLowerCase();

  const onPanelClick = (typeRouteName, subTypeRouteName) => {
    console.log("LIGNKS", typeRouteName, subTypeRouteName);

    const clickedCategoryName = menuData[activeKey[0] - 1].name;
    const routeTempalte = subTypeRouteName
      ? clickedCategoryName.toLowerCase() +
        `/all-${formate(typeRouteName)}/${formate(subTypeRouteName)}`
      : clickedCategoryName.toLowerCase() + `/all-${formate(typeRouteName)}`;

    navigate(routeTempalte);
    closeHandler();
  };

  return (
    <SideMenuContainer>
      <Collapse
        accordion
        expandIconPosition="end"
        ghost
        onChange={(key) => setActiveKey(key)}
      >
        {menuData !== undefined &&
          menuData.map((item) => {
            const types = item.types ?? [];
            return (
              <SideMenuItem header={item.name} key={item.id}>
                {types.map((type) => (
                  <NestedCollapse type={type} redirectHandler={onPanelClick} />
                ))}
              </SideMenuItem>
            );
          })}
      </Collapse>
    </SideMenuContainer>
  );
};

export default SideMenuMain;

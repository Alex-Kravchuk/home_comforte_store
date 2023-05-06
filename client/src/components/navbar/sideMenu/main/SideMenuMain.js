import React from "react";

import { Collapse } from "antd";

import NestedCollapse from "./panel/NestedCollapse";

import { SideMenuItem, SideMenuContainer } from "./SideMenuMain.styled";

const SideMenuMain = ({ menuData }) => {
  return (
    <SideMenuContainer>
      <Collapse accordion expandIconPosition="end" ghost>
        {menuData !== undefined &&
          menuData.map((item) => (
            <SideMenuItem header={item.name} key={item.id}>
              {item.types.map((type) => (
                <NestedCollapse type={type} />
              ))}
            </SideMenuItem>
          ))}
      </Collapse>
    </SideMenuContainer>
  );
};

export default SideMenuMain;

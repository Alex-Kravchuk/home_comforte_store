import React from "react";

import {
  sideMenuItems,
} from "../../../../assets/mock/sideMenuItemsMOCK";
import { Collapse } from "antd";
import {
  SideMenuContainer,
  SideMenuItem,
  SideMenuSubItem,
} from "./SideMenuMain.styled";

const SideMenuMain = () => {
  return (
    <SideMenuContainer>
      <Collapse
        accordion
        expandIconPosition="end"
        ghost
      >
        {sideMenuItems.map((item) => (
          <SideMenuItem header={item.title} key={item.id}>
            {item.children.map((child) => (
              <SideMenuSubItem key={child}>{child}</SideMenuSubItem>
            ))}
          </SideMenuItem>
        ))}
      </Collapse>
    </SideMenuContainer>
  );
};

export default SideMenuMain;

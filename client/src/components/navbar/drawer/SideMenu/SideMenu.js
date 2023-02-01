import { Drawer } from "@mui/material";
import React from "react";
import { drawerContentSizeConfig } from "./SideMenu.styled";

const SideMenu = ({ opened, closeHandler }) => {
  const closeSideMenuHandler = () => closeHandler(false);
  return (
    <Drawer
      anchor="left"
      open={opened}
      onClose={closeSideMenuHandler}
      PaperProps={drawerContentSizeConfig}
    >
      <li>pisun 1</li>
      <li>pisun 1</li>
      <li>pisun 1</li>
    </Drawer>
  );
};

export default SideMenu;

import React from "react";
import SideMenuHeader from "./header/SideMenuHeader";
import SideMenuMain from "./main/SideMenuMain";

import { Drawer } from "antd";
import {
  CustomDrawer,
  DrawerContentContainer,
  drawerContentSizeConfig,
  DrawerContentWrapper,
} from "./SideMenu.styled";

const SideMenu = ({ opened, closeHandler }) => {
  const closeSideMenuHandler = () => closeHandler(false);

  const widthCanBe = window.innerWidth > 475 ? "45vw" : "85vw";
  return (
    <CustomDrawer
      // title={<SideMenuHeader />}
      width={widthCanBe}
      placement="left"
      key="left"
      open={opened}
      onClose={closeSideMenuHandler}
    >
      <DrawerContentWrapper>
        <DrawerContentContainer>HUESOS</DrawerContentContainer>
      </DrawerContentWrapper>
    </CustomDrawer>
  );
};

export default SideMenu;

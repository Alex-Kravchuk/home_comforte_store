import React, { useEffect, useState } from "react";

import { Drawer } from "antd";
import CloseIcon from "@mui/icons-material/Close";

import SideMenuMain from "./main/SideMenuMain";
import SideMenuFooter from "./footer/SideMenuFooter";
import { sizes } from "../../../utils/css_size_consts";

import { useGetWindowSize } from "../../../hooks/useGetWindowSize";

import {
  drawerBodyStyles,
  DrawerContentWrapper,
  DrawerContentContainer,
} from "./SideMenu.styled";

const SideMenu = ({ opened, closeHandler, menuData }) => {
  const [drawerWidth, setDrawerDidwth] = useState(380);
  const viewport = useGetWindowSize();

  useEffect(() => {
    if (viewport.width < 425) {
      setDrawerDidwth(sizes.global.sideMenuSizeMobile);
    } else {
      setDrawerDidwth(sizes.global.sideMenuSize);
    }
  }, [viewport]);

  return (
    <Drawer
      width={drawerWidth}
      bodyStyle={drawerBodyStyles}
      placement="left"
      key="left"
      open={opened}
      onClose={closeHandler}
      closeIcon={<CloseIcon />}
    >
      <DrawerContentWrapper>
        <DrawerContentContainer>
          <SideMenuMain menuData={menuData} closeHandler={closeHandler} />
          <SideMenuFooter />
        </DrawerContentContainer>
      </DrawerContentWrapper>
    </Drawer>
  );
};

export default SideMenu;

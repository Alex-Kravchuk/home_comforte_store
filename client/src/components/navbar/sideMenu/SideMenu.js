import React, { useEffect, useState } from "react";
import SideMenuHeader from "./header/SideMenuHeader";
import SideMenuMain from "./main/SideMenuMain";

import { Drawer } from "antd";
import {
  drawerBodyStyles,
  DrawerContentContainer,
  DrawerContentWrapper,
} from "./SideMenu.styled";

import { useGetWindowSize } from "../../../hooks/useGetWindowSize";

import CloseIcon from "@mui/icons-material/Close";
import { sizes } from "../../../utils/css_size_consts";
import SideMenuFooter from "./footer/SideMenuFooter";

const SideMenu = ({ opened, closeHandler }) => {
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
          <SideMenuMain />
          <SideMenuFooter closeHandler={closeHandler} />
        </DrawerContentContainer>
      </DrawerContentWrapper>
    </Drawer>
  );
};

export default SideMenu;

import React, { useState } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { DrawerContainer, DrawerIconContainer } from "./Drawer.styled";
import SideMenu from "../sideMenu/SideMenu";

const Drawer = ({ smallScreen, mobileScreen, setOpenSearch }) => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

  const openSearchFieldHandler = (event) => {
    event.stopPropagation();
    setOpenSearch((state) => !state);
  };

  // I set overflow value because something wrong with Drawer component from ANTD
  const openSideMenuHandler = () => {
    document.body.style.overflow = "hidden";
    setSideMenuOpened(true);
  };
  const closeSideMenuHandler = () => {
    document.body.style.overflow = "unset";
    setSideMenuOpened(false);
  };

  return (
    <DrawerContainer smallScreen={smallScreen}>
      {smallScreen && (
        <>
          <DrawerIconContainer leftSideIcon>
            <MenuOutlinedIcon onClick={openSideMenuHandler} />
          </DrawerIconContainer>
          {mobileScreen && (
            <DrawerIconContainer>
              <SearchOutlinedIcon onClick={openSearchFieldHandler} />
            </DrawerIconContainer>
          )}
        </>
      )}
      <SideMenu opened={sideMenuOpened} closeHandler={closeSideMenuHandler} />
    </DrawerContainer>
  );
};

export default Drawer;

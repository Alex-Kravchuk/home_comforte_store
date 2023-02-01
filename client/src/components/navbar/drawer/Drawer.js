import React, { useState } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { DrawerContainer, DrawerIconContainer } from "./Drawer.styled";
import SideMenu from "./SideMenu/SideMenu";

const Drawer = ({ smallScreen, mobileScreen, setOpenSearch }) => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

  const openSearchFieldHandler = (event) => {
    event.stopPropagation();
    setOpenSearch((state) => !state);
  };

  const openSideMenuHandler = () => setSideMenuOpened(true);

  return (
    <DrawerContainer smallScreen={smallScreen}>
      {smallScreen && (
        <>
          <DrawerIconContainer>
            <MenuOutlinedIcon onClick={openSideMenuHandler} />
          </DrawerIconContainer>
          {mobileScreen && (
            <DrawerIconContainer>
              <SearchOutlinedIcon onClick={openSearchFieldHandler} />
            </DrawerIconContainer>
          )}
        </>
      )}
      <SideMenu opened={sideMenuOpened} closeHandler={setSideMenuOpened} />
    </DrawerContainer>
  );
};

export default Drawer;

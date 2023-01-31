import React from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { DrawerContainer, DrawerIconContainer } from "./Drawer.styled";

const Drawer = ({ smallScreen, mobileScreen, setOpenSearch }) => {
  const openSearchFieldHandler = () => {
    setOpenSearch((state) => !state);
  };
  return (
    <DrawerContainer smallScreen={smallScreen}>
      {smallScreen && (
        <>
          <DrawerIconContainer>
            <MenuOutlinedIcon />
          </DrawerIconContainer>
          {mobileScreen && (
            <DrawerIconContainer>
              <SearchOutlinedIcon onClick={openSearchFieldHandler} />
            </DrawerIconContainer>
          )}
        </>
      )}
    </DrawerContainer>
  );
};

export default Drawer;

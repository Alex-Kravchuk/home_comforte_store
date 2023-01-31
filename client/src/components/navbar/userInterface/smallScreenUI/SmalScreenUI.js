import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { SmallScreenUIContainer } from "./smallScreenUI.styled";

const SmallScreenUI = ({ open, onClose }) => {
  return (
    <SmallScreenUIContainer>
      <Menu open={open} onClose={onClose}>
        <MenuItem>Search</MenuItem>
        <MenuItem>Account</MenuItem>
        <MenuItem>Basket</MenuItem>
      </Menu>
    </SmallScreenUIContainer>
  );
};

export default SmallScreenUI;

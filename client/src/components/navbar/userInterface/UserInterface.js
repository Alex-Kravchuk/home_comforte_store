import React from "react";

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import {
  UserInterfaceContainer,
  UserInterfaceIconContainer,
  UserInterfaceWrapper,
} from "./UserInterface.styled";
import { Link } from "react-router-dom";
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
} from "../../../utils/routes_consts";

const UserInterface = ({ setOpenSearch, mobileScreen }) => {
  const openSearchFieldHandler = (event) => {
    event.stopPropagation();
    setOpenSearch((state) => !state);
  };

  return (
    <UserInterfaceWrapper>
      <UserInterfaceContainer>
        {!mobileScreen && (
          <UserInterfaceIconContainer>
            <SearchOutlinedIcon onClick={openSearchFieldHandler} />
          </UserInterfaceIconContainer>
        )}
        <Link to={`${ACCOUNT_ROUTE}/${LOGIN_ROUTE}`}>
          <UserInterfaceIconContainer rightSideIcon>
            <PermIdentityOutlinedIcon />
          </UserInterfaceIconContainer>
        </Link>

        <UserInterfaceIconContainer>
          <ShoppingCartOutlinedIcon />
        </UserInterfaceIconContainer>
      </UserInterfaceContainer>
    </UserInterfaceWrapper>
  );
};

export default UserInterface;

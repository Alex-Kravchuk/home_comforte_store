import React from "react";

import { Link, useLocation } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { ACCOUNT_ROUTE, USER_ROUTE } from "../../../utils/routes_consts";

import {
  UserInterfaceWrapper,
  UserInterfaceContainer,
  UserInterfaceIconContainer,
} from "./UserInterface.styled";

const UserInterface = ({ setOpenSearch, mobileScreen }) => {
  const { pathname } = useLocation();

  const accountPageRoute =
    pathname.includes("login") || pathname.includes("create")
      ? "#"
      : ACCOUNT_ROUTE + "/" + USER_ROUTE;

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
        <Link to={accountPageRoute} state={{ from: pathname }}>
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

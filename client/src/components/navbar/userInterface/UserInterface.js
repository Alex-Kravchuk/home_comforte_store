import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
  ACCOUNT_ROUTE,
  PROFILE_ROUTE,
  USER_ROUTE,
} from "../../../utils/routes_consts";

import {
  UserInterfaceWrapper,
  UserInterfaceContainer,
  UserInterfaceIconContainer,
} from "./UserInterface.styled";
import { useDispatch } from "react-redux";
import { changeActiveUserPage } from "../../../redux/user/userSlice";

const UserInterface = ({ setOpenSearch, mobileScreen }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accountPageRoute =
    pathname.includes("login") || pathname.includes("create")
      ? "#"
      : ACCOUNT_ROUTE + "/" + USER_ROUTE + "/" + PROFILE_ROUTE;

  const openSearchFieldHandler = (event) => {
    event.stopPropagation();
    setOpenSearch((state) => !state);
  };


  const opeUserPageHandler = () => {
    console.log('zaulpa', pathname);
    
    const arrPathname = pathname.split("/");
    if (arrPathname[arrPathname.length - 1] === PROFILE_ROUTE) return;
    dispatch(changeActiveUserPage(PROFILE_ROUTE));
    navigate(accountPageRoute, { state: { from: pathname } });
  };

  return (
    <UserInterfaceWrapper>
      <UserInterfaceContainer>
        {!mobileScreen && (
          <UserInterfaceIconContainer>
            <SearchOutlinedIcon onClick={openSearchFieldHandler} />
          </UserInterfaceIconContainer>
        )}

        <UserInterfaceIconContainer rightSideIcon onClick={opeUserPageHandler}>
          <PermIdentityOutlinedIcon />
        </UserInterfaceIconContainer>

        <UserInterfaceIconContainer>
          <ShoppingCartOutlinedIcon />
        </UserInterfaceIconContainer>
      </UserInterfaceContainer>
    </UserInterfaceWrapper>
  );
};

export default UserInterface;

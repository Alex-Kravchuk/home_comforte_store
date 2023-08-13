import React from "react";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { changeActiveUserPage } from "../../../redux/user/userSlice";

import {
  USER_ROUTE,
  LOGIN_ROUTE,
  ACCOUNT_ROUTE,
  PROFILE_ROUTE,
  ADMIN_OVERVIEW,
} from "../../../utils/routes_consts";

import {
  UserInterfaceWrapper,
  UserInterfaceContainer,
  UserInterfaceIconContainer,
} from "./UserInterface.styled";

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
    const guestExist = localStorage.getItem("guest_token");
    if (guestExist) {
      return navigate(ACCOUNT_ROUTE + "/" + LOGIN_ROUTE, {
        state: { from: pathname },
      });
    }

    const arrPathname = pathname.split("/");

    if (
      arrPathname[arrPathname.length - 1] === PROFILE_ROUTE ||
      arrPathname[arrPathname.length - 1] === ADMIN_OVERVIEW
    ) {
      return;
    }

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

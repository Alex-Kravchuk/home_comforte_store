import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import UserMenu from "./userMenu/UserMenu";
import UserLogOut from "./userLogOut/UserLogOut";

import { HOME_ROUTE } from "../../../utils/routes_consts";
import { AuthService } from "../../../api/user/authService";

import { getGuest } from "../../../redux/guest/guestSlice";
import { changeActiveUserPage, logout } from "../../../redux/user/userSlice";

import { UserWrapper, UserContainer } from "./User.styled";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      dispatch(changeActiveUserPage("profile"));
    };
  }, []);

  const logOutHandler = async () => {
    await AuthService.logout();
    dispatch(logout());
    dispatch(getGuest());
    console.log("user component", pathname);

    navigate(HOME_ROUTE, { state: { from: pathname } });
  };

  return (
    <UserWrapper>
      <UserContainer>
        <UserLogOut logOutHandler={logOutHandler} />
        <UserMenu />
        <Outlet />
      </UserContainer>
    </UserWrapper>
  );
};

export default User;

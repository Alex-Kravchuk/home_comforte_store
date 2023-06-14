import React, { useEffect, useState } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";
import { CustomeButton, UserContainer, UserWrapper } from "./User.styled";
import { useSelector, useDispatch } from "react-redux";

import { AuthService } from "../../../api/user/authService";

import { logout } from "../../../redux/user/userSlice";
import { getGuest } from "../../../redux/guest/guestSlice";
import { Menu, Tabs } from "antd";
import Profile from "./userPages/profile/Profile";
import Settings from "./userPages/settings/Settings";

import { SolutionOutlined, SettingOutlined } from "@ant-design/icons";

import { Container } from "../../../styles/globalStyles";

const items = [
  {
    key: "profile",
    icon: <SolutionOutlined />,
    label: <Link to={"profile"}>Profile</Link>,
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: <Link to={"settings"}>Settings</Link>,
  },
];

const User = () => {
  const [current, setCurrent] = useState("profile");
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changePageHandler = (e) => {
    setCurrent(e.key);
  };

  const logOutHandler = async () => {
    await AuthService.logout();
    dispatch(logout());
    dispatch(getGuest());
    navigate(HOME_ROUTE);
  };

  return (
    <UserWrapper>
      <UserContainer>
        <Menu
          items={items}
          onClick={changePageHandler}
          mode="horizontal"
          selectedKeys={current}
        />
        <Outlet />
      </UserContainer>
    </UserWrapper>
  );
};

export default User;

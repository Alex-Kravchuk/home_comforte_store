import React from "react";

import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { changeActiveUserPage } from "../../../../redux/user/userSlice";

import { user_menu_items } from "./usermenu_config";

const UserMenu = () => {
  const { activeUserPage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const changePageHandler = (e) => {
    dispatch(changeActiveUserPage(e.key));
  };

  return (
    <Menu
      items={user_menu_items}
      onClick={changePageHandler}
      mode="horizontal"
      selectedKeys={activeUserPage}
    />
  );
};

export default UserMenu;

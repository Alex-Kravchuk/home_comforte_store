import React, { useState } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

import {  Menu } from "antd";
import { adminMenuItems } from "./adminMenuItems";
import { AdminMenuToggleBtn, AdminMenuWrapper } from "./AdminMenu.styled";

const AdminMenu = () => {
  const [isCollapsed, setCollapset] = useState(false);

  const toggleCollapsed = () => {
    setCollapset(!isCollapsed);
  };
  return (
    <AdminMenuWrapper>
      <AdminMenuToggleBtn onClick={toggleCollapsed}>
        {isCollapsed ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
      </AdminMenuToggleBtn>
      <Menu
        items={adminMenuItems}
        defaultSelectedKeys={["1"]}
        mode="inline"
        inlineCollapsed={isCollapsed}
      />
    </AdminMenuWrapper>
  );
};

export default AdminMenu;

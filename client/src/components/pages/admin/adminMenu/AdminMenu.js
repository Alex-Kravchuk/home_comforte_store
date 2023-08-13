import React from "react";

import { Menu } from "antd";
import { adminMenuItems } from "./adminMenuItems";
import { AdminMenuWrapper } from "./AdminMenu.styled";

const AdminMenu = () => {
  return (
    <AdminMenuWrapper>
      <Menu items={adminMenuItems} defaultSelectedKeys={["1"]} mode="inline" />
    </AdminMenuWrapper>
  );
};

export default AdminMenu;

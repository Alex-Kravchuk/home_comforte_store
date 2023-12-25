import React, { useEffect, useState } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

import { Menu } from "antd";
import { adminMenuItems } from "./adminMenuItems";
import { AdminMenuToggleBtn, AdminMenuWrapper } from "./AdminMenu.styled";
import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const AdminMenu = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const viewport = useGetWindowSize();

  const smallLaptopScreen = viewport.width <= viewport_sizes.xxl;

  const toggleCollapsed = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <AdminMenuWrapper>
      {!smallLaptopScreen && (
        <AdminMenuToggleBtn onClick={toggleCollapsed}>
          {isCollapsed ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
        </AdminMenuToggleBtn>
      )}

      <Menu
        items={adminMenuItems}
        defaultSelectedKeys={["1"]}
        mode={smallLaptopScreen ? "horizontal" : "inline"}
        inlineCollapsed={isCollapsed}
      />
    </AdminMenuWrapper>
  );
};

export default AdminMenu;

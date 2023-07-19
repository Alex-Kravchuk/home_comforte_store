import React from "react";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { Popconfirm } from "antd";
import { UserLogOutContainer } from "./userLogOut.styled";

const UserLogOut = ({ logOutHandler }) => {
  const confirmHandler = () => logOutHandler();
  return (
    <Popconfirm
      placement="leftTop"
      title="Do you really want to log out?"
      onConfirm={confirmHandler}
      okText="Yes"
      cancelText="No"
    >
      <UserLogOutContainer>
        <LogoutOutlinedIcon />
      </UserLogOutContainer>
    </Popconfirm>
  );
};

export default UserLogOut;

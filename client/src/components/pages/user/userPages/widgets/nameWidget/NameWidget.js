import React from "react";

import { Avatar, Button } from "antd";

import { UserOutlined } from "@ant-design/icons";

import {
  NWAvatar,
  NWEditBtn,
  NWWrapper,
  NWUserName,
  NWContainer,
  NWAvatarNameContainer,
} from "./NameWidget.styled";
import { WidgetWrapper } from "../Widget.styled";

const NameWidget = () => {
  return (
    <NWWrapper>
      <WidgetWrapper>
        <NWContainer>
          <NWAvatarNameContainer>
            <NWAvatar>
              <Avatar size={64} icon={<UserOutlined />} />
            </NWAvatar>
            <NWUserName>Felicia Harvey</NWUserName>
          </NWAvatarNameContainer>

          <NWEditBtn>
            <Button>EDIT</Button>
          </NWEditBtn>
        </NWContainer>
      </WidgetWrapper>
    </NWWrapper>
  );
};

export default NameWidget;

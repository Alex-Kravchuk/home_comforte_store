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
  NWAvatarImg,
} from "./NameWidget.styled";
import { WidgetWrapper } from "../Widget.styled";
import { useNavigate } from "react-router-dom";
import {
  PERSONAL_SETTINGS,
  SETTINGS_ROUTE,
} from "../../../../../../utils/routes_consts";
import { useDispatch } from "react-redux";
import { changeActiveUserPage } from "../../../../../../redux/user/userSlice";

const NameWidget = ({ userData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { img, name, lastname } = userData ?? {};

  const redirectToSettingsPage = () => {
    dispatch(changeActiveUserPage("personal"));
    navigate("../" + SETTINGS_ROUTE + "/" + PERSONAL_SETTINGS);
  };
  return (
    <NWWrapper>
      <WidgetWrapper>
        <NWContainer>
          <NWAvatarNameContainer>
            <NWAvatar>
              <Avatar
                shape="square"
                size={64}
                icon={
                  (
                    <NWAvatarImg
                      src={img ? process.env.REACT_APP_API_URL + img : ""}
                      alt="avatar"
                    />
                  ) ?? <UserOutlined />
                }
              />
            </NWAvatar>
            <NWUserName>
              {name} {lastname}
            </NWUserName>
          </NWAvatarNameContainer>

          <NWEditBtn>
            <Button onClick={redirectToSettingsPage}>Edit</Button>
          </NWEditBtn>
        </NWContainer>
      </WidgetWrapper>
    </NWWrapper>
  );
};

export default NameWidget;

import React from "react";

import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";

import {
  WidgetTitle,
  WidgetWrapper,
  WidgetTitleContainer,
} from "../Widget.styled";

import {
  CWInfo,
  CWLabel,
  CWValue,
  CWContainer,
  CWInfoBlock,
  CWInfoLowerPart,
  CWInfoUpperPart,
} from "./ContactWidget.styled";
import { AddSpaceToEmail } from "../../../../../../helpers/AddSpaceToEmail";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  CONTACTS_SETTINGS,
  PERSONAL_SETTINGS,
  SETTINGS_ROUTE,
} from "../../../../../../utils/routes_consts";
import { useDispatch } from "react-redux";
import { changeActiveUserPage } from "../../../../../../redux/user/userSlice";

const ContactWidget = ({ userData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, mobile, address, bonus } = userData ?? {};
  // to add space before @ for moving a long string to another page
  const emailWithSpace = AddSpaceToEmail(email);

  const redirectToSettingsPage = () => {
    dispatch(changeActiveUserPage("contacts"));
    navigate("../" + SETTINGS_ROUTE + "/" + CONTACTS_SETTINGS);
  };

  return (
    <WidgetWrapper>
      <CWContainer>
        <WidgetTitleContainer>
          <ConnectWithoutContactOutlinedIcon />
          <WidgetTitle>Contact info</WidgetTitle>
        </WidgetTitleContainer>
        <CWInfo>
          <CWInfoUpperPart>
            <CWInfoBlock>
              <CWLabel>EMAIL</CWLabel>
              <CWValue>{emailWithSpace}</CWValue>
            </CWInfoBlock>
            <CWInfoBlock>
              <CWLabel>MOBILE</CWLabel>
              <CWValue>
                {mobile ?? (
                  <Button onClick={redirectToSettingsPage}>Add</Button>
                )}
              </CWValue>
            </CWInfoBlock>
          </CWInfoUpperPart>
          <CWInfoLowerPart>
            <CWInfoBlock>
              <CWLabel>ADDRESS</CWLabel>
              <CWValue>
                {address ?? (
                  <Button onClick={redirectToSettingsPage}>Add</Button>
                )}
              </CWValue>
            </CWInfoBlock>
            <CWInfoBlock>
              <CWLabel>BONUS</CWLabel>
              <CWValue>{bonus}</CWValue>
            </CWInfoBlock>
          </CWInfoLowerPart>
        </CWInfo>
      </CWContainer>
    </WidgetWrapper>
  );
};

export default ContactWidget;

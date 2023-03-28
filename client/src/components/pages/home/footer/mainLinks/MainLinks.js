import React from "react";
import { Container } from "../../../../../styles/globalStyles";
import {
  MLColumn,
  MLColumnTitle,
  MLContainer,
  MLFAQContainer,
  MLFAQItemAddInfo,
  MLFAQItemIcon,
  MLFAQItemName,
  MLFAQItems,
  MLFAQItemWrap,
  MLFAQTitle,
  MLFAQTitleMain,
  MLFAQTitleSub,
  MLItem,
  MLItemsContainer,
  MLWrapper,
} from "./MainLinks.styled";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const MainLinks = () => {
  return (
    <MLWrapper>
      <Container>
        <MLContainer>
          <MLItemsContainer>
            <MLColumn>
              <MLColumnTitle>Company</MLColumnTitle>
              <MLItem>About Us</MLItem>
            </MLColumn>
            <MLColumn>
              <MLColumnTitle>Visit Us</MLColumnTitle>
              <MLItem>All locations</MLItem>
            </MLColumn>
            <MLColumn>
              <MLColumnTitle>Design Guides</MLColumnTitle>
              <MLItem>Our seating collections</MLItem>
              <MLItem>AR: See it in your space</MLItem>
            </MLColumn>
            <MLColumn>
              <MLColumnTitle>Support</MLColumnTitle>
              <MLItem>Link 1</MLItem>
              <MLItem>Link 2</MLItem>
            </MLColumn>
          </MLItemsContainer>
          <MLFAQContainer>
            <MLFAQTitle>
              <MLFAQTitleMain>Questions? We're here to help</MLFAQTitleMain>
              <MLFAQTitleSub>Available 9am-7pm, Monday-Friday.</MLFAQTitleSub>
            </MLFAQTitle>
            <MLFAQItems>
              <MLFAQItemWrap>
                <MLFAQItemIcon>
                  <ChatOutlinedIcon />
                </MLFAQItemIcon>
                <MLFAQItemName>Live Chat</MLFAQItemName>
                <MLFAQItemAddInfo>Online now</MLFAQItemAddInfo>
              </MLFAQItemWrap>
              <MLFAQItemWrap>
                <MLFAQItemIcon>
                  <SmartphoneOutlinedIcon />
                </MLFAQItemIcon>
                <MLFAQItemName>Call</MLFAQItemName>
                <MLFAQItemAddInfo>+380986573412</MLFAQItemAddInfo>
              </MLFAQItemWrap>
              <MLFAQItemWrap>
                <MLFAQItemIcon>
                  <MarkEmailReadOutlinedIcon />
                </MLFAQItemIcon>
                <MLFAQItemName>Email</MLFAQItemName>
                <MLFAQItemAddInfo>Send us a message</MLFAQItemAddInfo>
              </MLFAQItemWrap>
            </MLFAQItems>
          </MLFAQContainer>
        </MLContainer>
      </Container>
    </MLWrapper>
  );
};

export default MainLinks;

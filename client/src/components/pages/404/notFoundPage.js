import React from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  NofFoundWrapper,
  NotFoundContainer,
  RedirectButton,
  SubContainer,
  SubTitle,
  Title,
} from "./NotFoundPage.styled";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <NofFoundWrapper>
      <NotFoundContainer>
        <Title>404 not found</Title>
        <SubContainer>
          <SubTitle>Looks like you're lost.</SubTitle>
          <RedirectButton>
            <Link to="/">Go home page </Link>
            <ArrowRightAltIcon />
          </RedirectButton>
        </SubContainer>
      </NotFoundContainer>
    </NofFoundWrapper>
  );
};

export default NotFoundPage;

import React from "react";
import { AccountPageWrapper } from "./Account.styled";

import { Outlet } from "react-router-dom";
import { Container } from "../../../styles/globalStyles";

const Account = () => {
  return (
    <AccountPageWrapper>
      <Container>
        <Outlet />
      </Container>
    </AccountPageWrapper>
  );
};

export default Account;

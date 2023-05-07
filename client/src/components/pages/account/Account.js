import React from "react";
import { AccountPageContainer, AccountPageWrapper } from "./Account.styled";

import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <AccountPageWrapper>
      <AccountPageContainer>
        <Outlet />
      </AccountPageContainer>
    </AccountPageWrapper>
  );
};

export default Account;

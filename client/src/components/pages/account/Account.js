import React, { useEffect } from "react";
import { AccountPageWrapper } from "./Account.styled";

import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../../../styles/globalStyles";
import { PROFILE_ROUTE, USER_ROUTE } from "../../../utils/routes_consts";

const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(USER_ROUTE + "/" + PROFILE_ROUTE);
  }, []);

  return (
    <AccountPageWrapper>
      <Container>
        <Outlet />
      </Container>
    </AccountPageWrapper>
  );
};

export default Account;

import React, { useEffect } from "react";
import { AccountPageContainer, AccountPageWrapper } from "./Account.styled";

import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  CREATE_ROUTE,
  LOGIN_ROUTE,
  USER_ROUTE,
} from "../../../utils/routes_consts";

const Account = () => {
  const auth = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate(USER_ROUTE);
    } else {
      navigate(LOGIN_ROUTE);
    }
  }, [auth, navigate]);

  return (
    <AccountPageWrapper>
      <AccountPageContainer>
        <Outlet />
      </AccountPageContainer>
    </AccountPageWrapper>
  );
};

export default Account;

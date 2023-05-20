import React, { useEffect } from "react";
import { AccountPageContainer, AccountPageWrapper } from "./Account.styled";

import {
  Outlet,
  useNavigate,
  useLocation,
  redirect,
  Navigate,
} from "react-router-dom";
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  USER_ROUTE,
} from "../../../utils/routes_consts";
import { useAuth } from "../../../hooks/userApi/useAuth";
import LogIn from "./LogIn/LogIn";

const Account = () => {
  const { auth, role } = useAuth();
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  const adminAccess = auth && role.includes("ADMIN");
  const userAccess = auth;

  useEffect(() => {
    redirectHandler();
  }, []);


  // in this case I have the one problem
  // when using browser hsitory tools (go back go next arrows)
  // we will account page 2 times
  // and I don't know how it to fix
  const redirectHandler = () => {
    if (adminAccess) {
      return navigate(ADMIN_ROUTE);
    }

    if (userAccess) {
      return navigate(USER_ROUTE);
    }

    if (!adminAccess && !userAccess) {
      return navigate(LOGIN_ROUTE);
    }
  };

  return (
    <AccountPageWrapper>
      <AccountPageContainer>
        <Outlet />
      </AccountPageContainer>
    </AccountPageWrapper>
  );
};

export default Account;

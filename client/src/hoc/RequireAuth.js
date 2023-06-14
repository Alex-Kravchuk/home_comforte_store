import React, { useEffect, useState } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import PageLoader from "../components/loader/pageLoader/PageLoader";

import { $authHost } from "../api";
import { LOGIN_ROUTE } from "../utils/routes_consts";

const RequireAuth = ({ children }) => {
  const [endOfLoading, setEndOfLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  const isGuest = localStorage.getItem("guest_token");

  useEffect(() => {
    if (!isGuest) {
      checkAuth();
    }
  }, []);

  const checkAuth = async () => {
    setEndOfLoading(false);
    try {
      const redirectFromLoginPage = state
        ? state.from.includes("login")
        : false;
      const redirectFromSignUpPage = state
        ? state.from.includes("create")
        : false;
      // when redirect was from sign up or login page
      // return user page without authentification
      // debugger;
      if (redirectFromLoginPage || redirectFromSignUpPage) {
        setEndOfLoading(true);
        return children;
      }

      const authresponse = await $authHost.get("api/user/auth/");
      setEndOfLoading(true);
    } catch (error) {
      setEndOfLoading(false);

      return navigate("../" + LOGIN_ROUTE);
    }
  };

  if (isGuest) {
    return <Navigate to={"../" + LOGIN_ROUTE} />;
  }

  if (!endOfLoading) {
    return <PageLoader loading={!endOfLoading} from="requre" />;
  }

  return children;
};

export default RequireAuth;

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { $authHost } from "../api";
import PageLoader from "../components/loader/pageLoader/PageLoader";
import { notAuthorized, updateUser } from "../redux/user/userSlice";

import {
  ADMIN_OVERVIEW,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
} from "../utils/routes_consts";

const RequireAuth = ({ children }) => {
  const [endOfLoading, setEndOfLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isGuest = localStorage.getItem("guest_token");


  
  useEffect(() => {
    // console.log('guest 1');
    
    if (!isGuest) {
      // console.log('guest 2');
      checkAuth();
    }
  }, []);

  const checkAuth = async () => {
    try {
      setEndOfLoading(false);
      const { data } = await $authHost.get("api/user/auth/");
      const isAdmin = data?.admin;
      dispatch(updateUser(isAdmin ? data.admin : data.user));
      // console.log("check auth data", data);

      setEndOfLoading(true);
      const routeIfAdmin = ADMIN_ROUTE + "/" + ADMIN_OVERVIEW;
      return navigate(isAdmin ? "../" + routeIfAdmin : PROFILE_ROUTE);
    } catch (error) {
      console.log("error", error);

      dispatch(notAuthorized());
      setEndOfLoading(false);

      return navigate("../" + LOGIN_ROUTE);
    }
  };

  if (isGuest) {
    return <Navigate to={"../" + LOGIN_ROUTE} />;
  }

  if (!endOfLoading) {
    return <PageLoader loading={!endOfLoading} from="require" />;
  }

  return children;
};

export default RequireAuth;

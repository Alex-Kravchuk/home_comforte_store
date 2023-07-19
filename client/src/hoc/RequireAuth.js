import React, { useEffect, useState } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import PageLoader from "../components/loader/pageLoader/PageLoader";

import { $authHost } from "../api";
import { LOGIN_ROUTE, PROFILE_ROUTE, USER_ROUTE } from "../utils/routes_consts";
import { useDispatch } from "react-redux";
import { notAuthorized, updateUser } from "../redux/user/userSlice";

const RequireAuth = ({ children }) => {
  const [endOfLoading, setEndOfLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isGuest = localStorage.getItem("guest_token");

  useEffect(() => {
    if (!isGuest) {
      checkAuth();
    }
  }, []);

  const checkAuth = async () => {
    try {
      
      // console.log("zalupka check auth");
      setEndOfLoading(false);
      // const redirectFromLoginPage = state
      //   ? state.from.includes("login")
      //   : false;
      // const redirectFromSignUpPage = state
      //   ? state.from.includes("create")
      //   : false;
      // when redirect was from sign up or login page
      // return user page without authentification
      // debugger;
      // if (redirectFromLoginPage || redirectFromSignUpPage) {
      //   console.log("state from", state.from);

        // setEndOfLoading(true);
        // return children;
      // }

      const authresponse = await $authHost.get("api/user/auth/");
      dispatch(updateUser(authresponse.data.user))
      console.log("zalupa koya", authresponse);

      
      setEndOfLoading(true);
      return navigate(PROFILE_ROUTE);
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
    return <PageLoader loading={!endOfLoading} from="requre" />;
  }

  return children;
};

export default RequireAuth;

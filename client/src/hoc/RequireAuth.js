import React, { useEffect } from "react";
import { useAuth } from "../hooks/userApi/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
} from "../utils/routes_consts";

const RequireAuth = ({ children }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("reuqire for user");

  useEffect(() => {
    if (!auth) {
      navigate(LOGIN_ROUTE, { state: { from: location.pathname } });
    }
  }, []);

  if (!auth) {
    return (
      <Navigate to={LOGIN_ROUTE} state={{ from: location.pathname }} replace />
    );
  }

  return children;
};

export default RequireAuth;

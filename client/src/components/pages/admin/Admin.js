import React, { useEffect, useState } from "react";

import {  useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";
import { AdminPageWrapper } from "./Admin.styled";

const Admin = () => {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate(HOME_ROUTE);
    }
  }, []);

  return <AdminPageWrapper>Admin page</AdminPageWrapper>;
};

export default Admin;

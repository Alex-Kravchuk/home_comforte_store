import React, { useEffect, useState } from "react";

import {  useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";

const Admin = () => {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate(HOME_ROUTE);
    }
  }, []);

  return <div>Admin page</div>;
};

export default Admin;

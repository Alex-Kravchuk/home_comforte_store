import React, { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";
import { CustomeButton } from "./User.styled";

const User = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!auth) {
  //     navigate(HOME_ROUTE);
  //   }
  // }, []);

  return (
    <div>
      User page <CustomeButton variant="contained" onClick={() => navigate("purchase_history")}>CLick me</CustomeButton>
      <Outlet />
    </div>
  );
};

export default User;

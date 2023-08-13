import React, { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { ADMIN_OVERVIEW, HOME_ROUTE } from "../../../utils/routes_consts";
import {
  AdminPageContainer,
  AdminPageWrapper,
  AdminSubPageContainer,
} from "./Admin.styled";
import AdminMenu from "./adminMenu/AdminMenu";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ADMIN_OVERVIEW);
  }, []);

  return (
    <AdminPageWrapper>
      <AdminPageContainer>
        <AdminMenu />
        <AdminSubPageContainer>
          <Outlet />
        </AdminSubPageContainer>
      </AdminPageContainer>
    </AdminPageWrapper>
  );
};

export default Admin;

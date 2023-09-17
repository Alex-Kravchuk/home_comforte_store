import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { PageWrapper } from "./Page.styled";
import Breadcrumb from "../../helpers/BreadCrumb/BreadCrumb";

const Page = () => {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <PageWrapper>
      {!isHomePage && <Breadcrumb />}
      <Outlet />
    </PageWrapper>
  );
};

export default Page;

import React, { useEffect, useState } from "react";

import { BreadCrumbItem, BreadCrumbWrapper } from "./Breadcrumb.styled";
import { Container } from "../../styles/globalStyles";
import { Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/routes_consts";


const Breadcrumb = () => {
  const { pathname } = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  useEffect(() => {
    definePathArr();
  }, [pathname]);

  const definePathArr = () => {
    const separatedPathNames = pathname.split("/");
    // the first element of array will be ever an empry string, it's home route

    // TODO first letter an each part of route should be in upper case
    const pathNamesWithoutHomeRoute = separatedPathNames.slice(1);
    setBreadcrumbItems(pathNamesWithoutHomeRoute);
  };

  return (
    <BreadCrumbWrapper>
      <Container>
        <Breadcrumbs maxItems={5} aria-label="breadcrumb" separator=">">
          <Link to={HOME_ROUTE}>
            <BreadCrumbItem>Home</BreadCrumbItem>
          </Link>
          <Link to={HOME_ROUTE}>
            <BreadCrumbItem>Living</BreadCrumbItem>
          </Link>
          <Link to={HOME_ROUTE}>
            <BreadCrumbItem>All custom sectionals</BreadCrumbItem>
          </Link>
          {breadcrumbItems.map((item, index) => (
            <Link key={index}>
              <BreadCrumbItem>{item}</BreadCrumbItem>
            </Link>
          ))}
        </Breadcrumbs>
      </Container>
    </BreadCrumbWrapper>
  );
};

export default Breadcrumb;

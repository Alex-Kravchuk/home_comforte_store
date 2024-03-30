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

  const determinePreviousRoute = (currentIndex) => {
    let route = [];
    // TODO find better solution
    for (let i = 0; i <= currentIndex; i++) {
      route.push(breadcrumbItems[i]);
    }

    return route.join("/");
  };

  console.log('====================================');
  console.log(breadcrumbItems);
  console.log('====================================');

  return (
    <BreadCrumbWrapper>
      <Container>
        <Breadcrumbs maxItems={5} aria-label="breadcrumb" separator=">">
          <Link to={HOME_ROUTE}>
            <BreadCrumbItem>Home</BreadCrumbItem>
          </Link>
          {breadcrumbItems.map((item, index) => {
            let itemName = item.split("-");

            // debugger;
            if (itemName.length === 1) {
              itemName = itemName[0].charAt(0).toUpperCase() + item.slice(1);

              return (
                <Link to={determinePreviousRoute(index)} key={index}>
                  <BreadCrumbItem>{itemName}</BreadCrumbItem>
                </Link>
              );
            }

            if (itemName.length > 1) {
              itemName =
                itemName[0].charAt(0).toUpperCase() +
                itemName.join(" ").slice(1);

              return (
                <Link to={determinePreviousRoute(index)} key={index}>
                  <BreadCrumbItem>{itemName}</BreadCrumbItem>
                </Link>
              );
            }
          })}
        </Breadcrumbs>
      </Container>
    </BreadCrumbWrapper>
  );
};

export default Breadcrumb;

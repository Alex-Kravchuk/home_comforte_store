import React from "react";
import { Breadcrumb as BreadcrumbFormANTD } from "antd";
import { Container } from "../../styles/globalStyles";
import { BreadCrumbWrapper } from "./Breadcrumb.styled";

const Breadcrumb = () => (
  <BreadCrumbWrapper>
    <BreadcrumbFormANTD
      items={[
        {
          title: "Home",
        },
        {
          title: <a href="">Application Center</a>,
        },
        {
          title: <a href="">Application List</a>,
        },
        {
          title: "An Application",
        },
      ]}
    />
  </BreadCrumbWrapper>
);
export default Breadcrumb;

import React from 'react';
import { Breadcrumb as BreadcrumbFormANTD } from 'antd';

const Breadcrumb = () => (
  <BreadcrumbFormANTD
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default Breadcrumb;
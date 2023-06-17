import React from "react";

import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

import { orderStatusConfig } from "./orderStatusConfig";
import { ORDER_ROUTE } from "../../../../../../utils/routes_consts";
import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";

import { OWContainer, OWWrapper } from "./OrderWidget.styled";

import {
  WidgetTitle,
  WidgetWrapper,
  WidgetTitleContainer,
} from "../Widget.styled";

const dataSource = [
  {
    key: "1",
    number: "3452",
    date: "20-11-2020",
    status: "done",
  },
  {
    key: "2",
    number: "3457",
    date: "25-06-2021",
    status: "confirmed",
  },
  {
    key: "3",
    number: "3459",
    date: "07-09-2021",
    status: "paid for",
  },
  {
    key: "4",
    number: "3467",
    date: "22-11-2022",
    status: "delivered",
  },
  {
    key: "5",
    number: "3491",
    date: "20-11-2022",
    status: "done",
  },
  {
    key: "6",
    number: "3507",
    date: "15-06-2023",
    status: "in processing",
  },
];

const columns = [
  {
    title: "Order number",
    dataIndex: "number",
    key: "number",
    render: (number) => <Link to={ORDER_ROUTE + "/" + number}>{number}</Link>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => <Tag color={orderStatusConfig[status]}>{status}</Tag>,
  },
];

const OrderWidget = () => {
  const viewport = useGetWindowSize();

  const defaultPageSize = viewport.width < 1024 ? 2 : 3;

  return (
    <OWWrapper>
      <WidgetWrapper>
        <OWContainer>
          <WidgetTitleContainer>
            <InventoryOutlinedIcon />
            <WidgetTitle>Orders</WidgetTitle>
          </WidgetTitleContainer>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ defaultPageSize }}
          />
        </OWContainer>
      </WidgetWrapper>
    </OWWrapper>
  );
};

export default OrderWidget;

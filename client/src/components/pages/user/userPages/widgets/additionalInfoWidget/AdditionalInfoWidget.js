import React from "react";

import { Tabs } from "antd";

import { WidgetWrapper } from "../Widget.styled";
import { AIWContainer, AIWWrapper } from "./AdditionalInfoWidget.styled";


import ReviewsList from "../../../../product/Reviews/ReviewsList/ReviewsList";

const items = [
  {
    key: "1",
    label: "Reviews left",
    children: <ReviewsList />,
  },
];

const AdditionalInfoWidget = () => {
  return (
    <AIWWrapper>
      <WidgetWrapper>
        <AIWContainer>
          <Tabs defaultActiveKey="1" items={items} />
        </AIWContainer>
      </WidgetWrapper>
    </AIWWrapper>
  );
};

export default AdditionalInfoWidget;

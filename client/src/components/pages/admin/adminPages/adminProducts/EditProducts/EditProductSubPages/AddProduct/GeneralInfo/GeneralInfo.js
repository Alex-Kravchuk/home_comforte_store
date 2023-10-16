import React, { useState } from "react";

import { Button, Collapse, Form } from "antd";
import { useSelector } from "react-redux";

import {
  GeneralInfoContainer,
  GeneralInfoWrapper,
  
} from "./GeneralInfo.styled";

import SubGeneralInfo from "./SubGeneralInfo/SubGeneralInfo";
import DimensionInfo from "./DimensionInfo/DimensionInfo";
import { InfoBlockTitle } from "../AddProduct.styled";

const GeneralInfo = () => {
  const { data: categories } = useSelector((state) => state.menuData);
  const onChangeForm = (values) => console.log("values changed:", values);

  const generalSubTabs = [
    {
      key: "1",
      label: <InfoBlockTitle>General</InfoBlockTitle>,
      children: <SubGeneralInfo categories={categories} />,
    },
    {
      key: "2",
      label: <InfoBlockTitle>Dimension</InfoBlockTitle>,
      children: <DimensionInfo />,
    },
  ];

  return (
    <GeneralInfoWrapper>
      <GeneralInfoContainer>
        <Form layout="vertical" onChange={onChangeForm}>
          <Collapse
            items={generalSubTabs}
            defaultActiveKey={["1"]}
            size="large"
            expandIconPosition="start"
          />
          <Button htmlType="submit"> submit</Button>
        </Form>
      </GeneralInfoContainer>
    </GeneralInfoWrapper>
  );
};

export default GeneralInfo;

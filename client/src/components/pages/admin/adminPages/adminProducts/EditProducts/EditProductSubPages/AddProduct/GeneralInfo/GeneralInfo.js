import React, { useState } from "react";

import { Form } from "antd";
import { useSelector } from "react-redux";

import { GeneralInfoContainer, GeneralInfoWrapper } from "./GeneralInfo.styled";

import SubGeneralInfo from "./SubGeneralInfo/SubGeneralInfo";
import DimensionInfo from "./DimensionInfo/DimensionInfo";

const GeneralInfo = () => {
  const { data: categories } = useSelector((state) => state.menuData);
  const onChangeForm = (values) => console.log("values changed:", values);

  return (
    <GeneralInfoWrapper>
      <GeneralInfoContainer>
        <Form layout="vertical" onChange={onChangeForm}>
          <SubGeneralInfo categories={categories} />
          <DimensionInfo />
        </Form>
      </GeneralInfoContainer>
    </GeneralInfoWrapper>
  );
};

export default GeneralInfo;

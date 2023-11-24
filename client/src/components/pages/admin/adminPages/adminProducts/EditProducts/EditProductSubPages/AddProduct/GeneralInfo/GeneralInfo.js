import React, { useState } from "react";

import {  Form } from "antd";
import {  useSelector } from "react-redux";

import { GeneralInfoContainer, GeneralInfoWrapper } from "./GeneralInfo.styled";

import DimensionInfo from "./DimensionInfo/DimensionInfo";
import SubGeneralInfo from "./SubGeneralInfo/SubGeneralInfo";

import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";

const GeneralInfo = ({ setDataHandler }) => {
  const [form] = Form.useForm();
  
  const { data: categories } = useSelector((state) => state.menuData);

  const [dimensionImg, setDimensionImg] = useState(null);
  const [dimensionInfo, setDimensionInfo] = useState([]);

  const [dimensionError, setDimensionError] = useState(false);
  const [temporarilySaved, setTemporarilySaved] = useState(false);

  const onFinishForm = async (values) => {
    try {
      if (!dimensionImg || !dimensionInfo) {
        console.log("dimenisonasdasdasd", dimensionError);

        setDimensionError(true);
        return;
      }

      setDataHandler({
        subGeneral: values,
        dimension: {
          info: dimensionInfo,
          img: dimensionImg,
        },
      });

      setTemporarilySaved(true);
      setDimensionError(false);
    } catch (error) {}
  };

  const resetDimensionValues = () => {
    setDimensionImg(null);
    setDimensionInfo([]);
  };

  console.log("dimesniosn info", dimensionInfo);

  return (
    <GeneralInfoWrapper>
      <GeneralInfoContainer>
        <Form form={form} layout="vertical" onFinish={onFinishForm}>
          <TemporarySaveIcon
            error={dimensionError}
            form={form}
            temporarySaveFlag={temporarilySaved}
            temporarilySaveHandler={setTemporarilySaved}
          resetDataHandler={resetDimensionValues}
          />
          <SubGeneralInfo categories={categories} />
          <DimensionInfo
            dimensionImg={dimensionImg}
            dimensionsData={dimensionInfo}
            temporarilySaved={temporarilySaved}
            dimensionImgHandler={setDimensionImg}
            dimensionInfoHandler={setDimensionInfo}
          />
        </Form>
      </GeneralInfoContainer>
    </GeneralInfoWrapper>
  );
};

export default GeneralInfo;

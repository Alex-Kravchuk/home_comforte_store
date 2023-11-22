import React, { useState } from "react";

import { Collapse, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { GeneralInfoContainer, GeneralInfoWrapper } from "./GeneralInfo.styled";

import SubGeneralInfo from "./SubGeneralInfo/SubGeneralInfo";
import DimensionInfo from "./DimensionInfo/DimensionInfo";

import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";
import { InfoBlockTitle } from "../AddProduct.styled";
import { saveGeneralInfo } from "../../../../../../../../../redux/productAdding/productAddingSlice";

const GeneralInfo = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.menuData);

  const [dimensionImg, setDimensionImg] = useState();
  const [dimensionInfo, setDimensionInfo] = useState([]);

  const [dimensionError, setDimensionError] = useState(false);
  const [temporarilySaved, setTemporarilySaved] = useState(false);

  const onFinishForm = (values) => {
    console.log("onFinishForm", values, dimensionInfo, dimensionImg);

    try {
      if (!dimensionImg || !dimensionInfo) {
        console.log("dimenisonasdasdasd", dimensionError);

        setDimensionError(true);
        return;
      }

      dispatch(saveGeneralInfo(values));
      setTemporarilySaved(true);
      setDimensionError(false);
    } catch (error) {}
  };

  const generalSubTabs = [
    {
      key: "1",
      label: <InfoBlockTitle>General</InfoBlockTitle>,
      children: <SubGeneralInfo categories={categories} />,
    },
    {
      key: "2",
      label: <InfoBlockTitle>Dimension</InfoBlockTitle>,
      children: (
        <DimensionInfo
          dimensionsData={dimensionInfo}
          temporarilySaved={temporarilySaved}
          dimensionImgHandler={setDimensionImg}
          dimensionInfoHandler={setDimensionInfo}
        />
      ),
    },
  ];

  console.log("dimesniosn info", dimensionInfo);

  // TODO Добавити помилку при збережні, якщо немає інформації в Dimension block

  return (
    <GeneralInfoWrapper>
      <GeneralInfoContainer>
        <Form form={form} layout="vertical" onFinish={onFinishForm}>
          <TemporarySaveIcon
            error={dimensionError}
            form={form}
            temporarySaveFlag={temporarilySaved}
            temporarilySaveHandler={setTemporarilySaved}
          />
          <Collapse
            items={generalSubTabs}
            defaultActiveKey={["1"]}
            size="large"
            expandIconPosition="start"
          />
        </Form>
      </GeneralInfoContainer>
    </GeneralInfoWrapper>
  );
};

export default GeneralInfo;

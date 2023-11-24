import React, { useState } from "react";

import { Collapse, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { GeneralInfoContainer, GeneralInfoWrapper } from "./GeneralInfo.styled";

import SubGeneralInfo from "./SubGeneralInfo/SubGeneralInfo";
import DimensionInfo from "./DimensionInfo/DimensionInfo";

import TemporarySaveIcon from "../TemporarySaveIcon/TemporarySaveIcon";
import { InfoBlockTitle } from "../AddProduct.styled";
import {
  saveDimensionInfo,
  saveSubGeneralInfo,
} from "../../../../../../../../../redux/productAdding/productAddingSlice";

const GeneralInfo = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.menuData);

  const [dimensionImg, setDimensionImg] = useState(null);
  const [dimensionInfo, setDimensionInfo] = useState([]);

  const [dimensionError, setDimensionError] = useState(false);
  const [temporarilySaved, setTemporarilySaved] = useState(false);

  const onFinishForm = async (values) => {
    console.log("onFinishForm", values, dimensionInfo, dimensionImg);

    try {
      if (!dimensionImg || !dimensionInfo) {
        console.log("dimenisonasdasdasd", dimensionError);

        setDimensionError(true);
        return;
      }

      // FOR TEST
      // TODO 
      // If I wont to save image to redux store and use it for request to server,
      // I need to make this manipulation with file (see below)

      const testBlob = URL.createObjectURL(dimensionImg);

      console.log("TestBlob", testBlob);

      await fetch(testBlob).then((result) =>
        result.blob().then((blobFile) => {
          const newFile = new File([blobFile], "dimensionImg", {
            type: "image/webp",
          });
          console.log("new file", newFile);
        })
      );

      dispatch(saveSubGeneralInfo(values));
      dispatch(
        saveDimensionInfo({
          info: dimensionInfo,
          img: URL.createObjectURL(dimensionImg),
        })
      );
      setTemporarilySaved(true);
      setDimensionError(false);
    } catch (error) {}
  };

  const resetDimensionValues = () => {
    setDimensionImg(null);
    setDimensionInfo([]);
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
          dimensionImg={dimensionImg}
          dimensionsData={dimensionInfo}
          temporarilySaved={temporarilySaved}
          dimensionImgHandler={setDimensionImg}
          dimensionInfoHandler={setDimensionInfo}
        />
      ),
    },
  ];

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
            resetDimensionHandler={resetDimensionValues}
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

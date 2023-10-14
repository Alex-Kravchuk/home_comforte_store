import React, { useState } from "react";

import AddRemoveInterface from "./AddRemoveInterface";
import DimensionInfoHeader from "./DimensionInfoHeader";
import DimensionSeatSizeItem from "./DimensionSeatSizeItem";

import { DIImageContainer, DISeatSizeContainer } from "./DimensionInfo.styled";
import UploadImg from "../../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/UploadImg";
import { InfoBlock } from "../../AddProduct.styled";

const DimensionInfo = () => {
  const [dimensionsData, setDimensionsData] = useState([
    {
      id: 1,
      label: "Seat comfort",
      details: "",
      value: "Soft seat",
    },
    {
      id: 2,
      label: "Seat height",
      details: "(floor to the highest point of the seat cushion)",
      value: "Medium height at 19”",
    },
  ]);

  const [dimensionImg, setDimensionImg] = useState(null);

  console.log("lll", dimensionsData);

  const addNewLabelLineHandler = () => {
    const newLine = {
      id: dimensionsData.length + 1,
      label: "",
      details: "",
      value: "",
    };

    setDimensionsData((state) => [...state, newLine]);
  };

  const removeTheLastOneLabelLine = () => {
    if (dimensionsData.length === 1) {
      return;
    }
    const newLines = dimensionsData.filter(
      (item) => item.id !== dimensionsData[dimensionsData.length - 1].id
    );

    setDimensionsData(newLines);
  };

  const saveFileHandler = (file) => {
    setDimensionImg(file);
  };

  console.log("diemsnion file", dimensionImg);

  return (
    <InfoBlock>
      <DimensionInfoHeader />
      <DISeatSizeContainer>
        {dimensionsData.map((item) => (
          <DimensionSeatSizeItem
            dimensionsData={dimensionsData}
            setDataHandler={setDimensionsData}
            key={item.id}
            item={item}
          />
        ))}
        <AddRemoveInterface
          lineIsNotTheLast={dimensionsData.length > 1}
          addNewLabelLineHandler={addNewLabelLineHandler}
          removeTheLastOneLabelLine={removeTheLastOneLabelLine}
        />
      </DISeatSizeContainer>
      <DIImageContainer>
        <DimensionInfoHeader aboutImgInfo={true} />
        <UploadImg separateLargeImg={true} saveFileHandler={saveFileHandler} />
      </DIImageContainer>
    </InfoBlock>
  );
};

export default DimensionInfo;

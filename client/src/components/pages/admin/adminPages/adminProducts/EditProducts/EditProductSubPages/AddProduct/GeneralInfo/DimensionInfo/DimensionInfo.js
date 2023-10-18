import React, { useState } from "react";

import AddRemoveInterface from "./AddRemoveInterface";

import DimensionSeatSizeItem from "./DimensionSeatSizeItem";

import { DIImageContainer, DISeatSizeContainer } from "./DimensionInfo.styled";

import { InfoBlock } from "../../AddProduct.styled";
import InfoHeader from "../../InfoHeader/InfoHeader";
import ProductImagesUploading from "../../ProductImages/ProductImagesUploading/ProductImagesUploading";

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
      <InfoHeader tooltipText="Here you can add information about the dimensions of the product. This will look like a name-value pair. You can also add a description to each label" />
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
        <InfoHeader tooltipText="Here you must upload the image in the following format: the image must be shown in profile and front with as many dimensions as possible (eg width, seat depth, height from the floor, etc.). This will help the client better understand how exactly a certain product works." />
        <ProductImagesUploading
          uploadType="dimension"
          saveFileHandler={saveFileHandler}
        />
      </DIImageContainer>
    </InfoBlock>
  );
};

export default DimensionInfo;

import React from "react";

import { Empty } from "antd";

import InfoHeader from "../../InfoHeader/InfoHeader";
import AddRemoveInterface from "./AddRemoveInterface";
import DimensionSeatSizeItem from "./DimensionSeatSizeItem";
import ProductImagesUploading from "../../ProductImages/ProductImagesUploading/ProductImagesUploading";

import { InfoBlock } from "../../AddProduct.styled";

import {
  DIImageContainer,
  DIImageUploadContainer,
  DISeatSizeContainer,
} from "./DimensionInfo.styled";

const DimensionInfo = ({
  dimensionImg,
  dimensionsData = [],
  dimensionImgHandler,
  dimensionInfoHandler,
}) => {
  const addNewLabelLineHandler = () => {
    const newLine = {
      id: dimensionsData.length + 1,
      label: "",
      details: "",
      value: "",
    };

    dimensionInfoHandler([...dimensionsData, newLine]);
  };

  const removeTheLastOneLabelLine = () => {
    if (dimensionsData.length === 1) {
      return;
    }

    // remove the last one line of items
    const newLines = dimensionsData.filter(
      (item) => item.id !== dimensionsData[dimensionsData.length - 1].id
    );

    dimensionInfoHandler(newLines);
  };

  const saveFileHandler = (file) => {
    dimensionImgHandler(file);
  };

  return (
    <InfoBlock>
      <InfoHeader tooltipText="Here you can add information about the dimensions of the product. This will look like a name-value pair. You can also add a description to each label" />
      <DISeatSizeContainer isEmpty={dimensionsData.length === 0}>
        {dimensionsData.length === 0 ? (
          <Empty description="No size information available" />
        ) : (
          dimensionsData.map((item) => (
            <DimensionSeatSizeItem
              item={item}
              key={item.id}
              dimensionsData={dimensionsData}
              setDataHandler={dimensionInfoHandler}
            />
          ))
        )}

        <AddRemoveInterface
          lineIsNotTheLast={dimensionsData.length > 1}
          addNewLabelLineHandler={addNewLabelLineHandler}
          removeTheLastOneLabelLine={removeTheLastOneLabelLine}
        />
      </DISeatSizeContainer>
      <DIImageContainer>
        <InfoHeader tooltipText="Here you must upload the image in the following format: the image must be shown in profile and front with as many dimensions as possible (eg width, seat depth, height from the floor, etc.). This will help the client better understand how exactly a certain product works." />
        <DIImageUploadContainer>
          <ProductImagesUploading
            uploadType="dimension"
            existingImage={dimensionImg}
            saveFileHandler={saveFileHandler}
          />
        </DIImageUploadContainer>
      </DIImageContainer>
    </InfoBlock>
  );
};

export default DimensionInfo;

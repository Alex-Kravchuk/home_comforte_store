import React, { useState } from "react";

import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

import InfoHeader from "../../InfoHeader/InfoHeader";
import ProductImagesUploading from "../ProductImagesUploading/ProductImagesUploading";

import {
  PVIClearFileListContainer,
  PVIContainer,
  PVIHeaderContainer,
  PVIWrapper,
} from "./ProductViewerImages.styled";
import { Button, Form, Tooltip, Upload } from "antd";

const ProductViewerImages = () => {
  const [images, setImages] = useState([]);
  const [clearFileListflag, setClearFileList] = useState(false);

  const saveFileHandler = (file) => {
    setImages((state) => [...state, file]);
  };

  const clearFileList = (wasCleared = false) => {
    setClearFileList(!wasCleared);
  };

  return (
    <PVIWrapper>
      <PVIContainer>
        <PVIHeaderContainer>
          <InfoHeader
            tooltipText={
              <div>
                Here you must upload a minimum of 16 images to view the product.
                The product viewer works in 360, so your images should be such
                that each image rotates around its own axis (you can
                <a> click here</a> to see an example). All images should have a
                single color background, shadows, etc., so that when scrolling
                the image, it appears as if the user is rotating a 3D shape
                around its axis.
              </div>
            }
          />
          <PVIClearFileListContainer onClick={clearFileList}>
            <Tooltip title="Clear the file list" placement="left">
              <DeleteSweepOutlinedIcon />
            </Tooltip>
          </PVIClearFileListContainer>
        </PVIHeaderContainer>
        <ProductImagesUploading
          uploadType="viewer"
          saveFileHandler={saveFileHandler}
          clearFileListflag={clearFileListflag}
          clearFileListHandler={setClearFileList}
        />
      </PVIContainer>
    </PVIWrapper>
  );
};

export default ProductViewerImages;

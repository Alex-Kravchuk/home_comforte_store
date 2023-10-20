import React, { useState } from "react";
import { PPIContainer, PPIWrapper } from "./ProductPreviewImages.styled";
import InfoHeader from "../../InfoHeader/InfoHeader";
import ProductImagesUploading from "../ProductImagesUploading/ProductImagesUploading";

const ProductPreviewImages = () => {
  const [images, setImages] = useState([]);
  const [clearFileListflag, setClearFileList] = useState(false);

  const saveFileHandler = (file) => {
    if (Array.isArray(file)) {
      // check if item has originalFileObj field that means it's array with
      // description fields
      // if not has that means it's an array without removed item
      setImages(
        file.map((fileItem) => ({
          originalFileObj: fileItem.originalFileObj ?? fileItem,
          description: fileItem.description ?? "",
        }))
      );
      return;
    }

    setImages((state) => [...state, file]);
  };

  console.log("images PREV", images);

  return (
    <PPIWrapper>
      <PPIContainer>
        <InfoHeader tooltipText="Here you should upload 2-4 images of your product from the real world (how it looks at home). You can also add a caption to each photo. Please use images that give the user the impression of the product as clearly as possible." />
      </PPIContainer>
      <ProductImagesUploading
        images={images}
        uploadType="preview"
        saveFileHandler={saveFileHandler}
        clearFileListflag={clearFileListflag}
        clearFileListHandler={setClearFileList}
      />
    </PPIWrapper>
  );
};

export default ProductPreviewImages;

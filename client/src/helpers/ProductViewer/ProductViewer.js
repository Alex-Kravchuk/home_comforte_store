import React, { useEffect, useState } from "react";
import {
  PVWrapper,
  PVContainer,
  PVPreviewImg,
  PVMainImgContainer,
  PVPreviewImgContainer,
  PVCurrentImg,
  PVCurrentImgContainer,
  ViewerField,
  PVPreviewImagesWrapper,
  PVPreviewImagesContainer,
} from "./ProductViewer.styled";

import { images } from "./imagesForTest";

const ProductViewer = () => {
  const [drag, setDrag] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [miniImages, setMiniImages] = useState([]);
  const [selectedPreviewID, setSelectedPreviewID] = useState(1);

  useEffect(() => {
    createMiniImages();
  }, []);

  /**
   * @function touchHandler
   * @function mouseMoveHandler
   * these functions handle scrolling over the viewer when viewer clicked (drag event)
   * using the width of the image container here calculates
   * the index of each image to be displayed
   */

  const touchHandler = (e) => {
    if (!drag) return;
    const { target } = e;

    const coefficient = target.clientWidth / images.length;
    const xCordinate = e.touches[0].clientX;

    const index = Math.trunc(xCordinate / coefficient);

    if (index > images.length - 1) {
      setCurrentImg(0);
      return;
    }

    setCurrentImg(index);

    const miniImagesIDs = miniImages.map((item) => item.id);

    miniImagesIDs.forEach((id) => {
      if (index + 1 === id) {
        setSelectedPreviewID(index + 1);
      }
    });
  };

  const mouseMoveHandler = (e) => {
    if (!drag) return;
    const { target, nativeEvent } = e;
    const coefficient = target.clientWidth / images.length;

    const index = Math.trunc(nativeEvent.offsetX / coefficient);
    if (index > images.length - 1) {
      setCurrentImg(0);
      return;
    }

    setCurrentImg(index);

    const miniImagesIDs = miniImages.map((item) => item.id);

    miniImagesIDs.forEach((id) => {
      if (index + 1 === id) {
        setSelectedPreviewID(index + 1);
      }
    });

    console.log("index prev", selectedPreviewID, index);
  };

  const selectPreviewHandler = (index) => {
    let i = currentImg;

    const next = () => {
      setCurrentImg(i);
      setSelectedPreviewID(i + 1);
      i++;
      if (i <= index) {
        setTimeout(next, 25);
      }
    };

    const back = () => {
      setCurrentImg(i);
      setSelectedPreviewID(i + 1);
      i--;
      if (i >= index) {
        setTimeout(back, 25);
      }
    };

    if (index > currentImg) {
      next();
    } else {
      back();
    }
  };

  const createMiniImages = () => {
    let accumulator = 4;
    const minis = [];

    // first img should be always in minis
    minis.push(images[0]);

    images.forEach((img, index) => {
      if (minis.length === 5) return;
      if (index === accumulator) {
        minis.push(img);
        accumulator += 4;
      }
    });

    setMiniImages(minis);
  };

  return (
    <PVWrapper>
      <PVContainer>
        <PVMainImgContainer>
          <PVCurrentImgContainer>
            <PVCurrentImg src={images[currentImg].src} />
          </PVCurrentImgContainer>
          <ViewerField
            onTouchStart={() => setDrag(true)}
            onTouchEnd={() => setDrag(false)}
            onTouchMove={touchHandler}
            onMouseDown={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onMouseUp={() => setDrag(false)}
            onMouseMove={mouseMoveHandler}
          ></ViewerField>
        </PVMainImgContainer>
        <PVPreviewImagesWrapper>
          <PVPreviewImagesContainer>
            {miniImages.map((img) => (
              <PVPreviewImgContainer
                key={img.id}
                selected={img.id === selectedPreviewID}
                onClick={() => selectPreviewHandler(img.id - 1)}
              >
                <PVPreviewImg src={img.src} selected={images} />
              </PVPreviewImgContainer>
            ))}
          </PVPreviewImagesContainer>
        </PVPreviewImagesWrapper>
      </PVContainer>
    </PVWrapper>
  );
};

export default ProductViewer;

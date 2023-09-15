import React, { useEffect, useState } from "react";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

import ProductViewerThumbnails from "./ProductViewerThumbnails";

import {
  PVWrapper,
  PVContainer,
  ViewerField,
  PVCurrentImg,
  FullScreenWrapper,
  PVMainImgContainer,
  FullScreenContainer,
  PVCurrentImgContainer,
  FullScreenIconContainer,
} from "./ProductViewer.styled";

const ProductViewer = ({ images }) => {
  const [drag, setDrag] = useState(false);
  const [currentImg, setCurrentImg] = useState(1);
  const [thumbnails, setThumbnails] = useState([]);
  const [fullScreenOpen, setFullScreenOpen] = useState(false);
  const [selectedPreviewID, setSelectedPreviewID] = useState(1);

  useEffect(() => {
    createThumbnails();
  }, []);

  useEffect(() => {
    const onFullScreenChange = () => {
      setFullScreenOpen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", onFullScreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullScreenChange);
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

    const lastImageIndex = images.length - 1;
    const coefficient = target.clientWidth / images.length;
    const xCordinate = e.touches[0].clientX;

    // add 1 to the index for ease of use together with the ID
    const index = Math.trunc(xCordinate / coefficient) + 1;

    if (index > lastImageIndex) {
      setCurrentImg(1);
      return;
    }

    setCurrentImg(index);
    selectedPreviewHandlerBySlide(index);
  };

  const mouseMoveHandler = (e) => {
    if (!drag) return;

    const { target, nativeEvent } = e;

    const lastImageIndex = images.length - 1;
    const coefficient = target.clientWidth / images.length;

    // add 1 to the index for ease of use together with the ID
    const index = Math.trunc(nativeEvent.offsetX / coefficient) + 1;

    if (index > lastImageIndex) {
      setCurrentImg(1);
      return;
    }

    setCurrentImg(index);
    selectedPreviewHandlerBySlide(index);
  };

  /**
   * @function selectPreviewHandlerByClick
   * I pass the id of the thumbnail that was clicked
   * use currentImg index to increase or decrease in the corresponding functions
   * and after that I pass this SetTimeout function with a delay of 25 milliseconds.
   * This is required for the image scrolling effect where each image is displayed with a delay
   */

  const selectPreviewHandlerByClick = (id) => {
    let i = currentImg;

    const next = () => {
      setCurrentImg(i);
      setSelectedPreviewID(i);
      i++;
      if (i <= id) {
        setTimeout(next, 25);
      }
    };

    const back = () => {
      setCurrentImg(i);
      setSelectedPreviewID(i);
      i--;
      if (i >= id) {
        setTimeout(back, 25);
      }
    };

    if (id > currentImg) {
      next();
    } else {
      back();
    }
  };

  /**
   * @function selectedPreviewHandlerBySlide
   * this function defines the index for the preview thumbnail
   * which will be highlighted with a black frame.
   *
   * when the user moves the cursor using the grab,
   * the function gets the index from the top function
   * and compares the index with the thumbnails id
   *
   * after that because the index became lower than the ID of the last thumbnail
   * we start subtracting the ID of the last thumbnail from the index
   *
   * thus we get the correct index again as when the index was not greater than
   * id of the last thumbnail
   *
   */

  const selectedPreviewHandlerBySlide = (index) => {
    const lastThumbnail = thumbnails[thumbnails.length - 1];

    thumbnails.forEach((thumbnail) => {
      if (index === thumbnail.id) {
        setSelectedPreviewID(index);
      }
    });

    if (index > lastThumbnail.id) {
      const repeatingIndex = index - lastThumbnail.id;
      thumbnails.forEach((thumbnail) => {
        if (repeatingIndex === thumbnail.id) {
          setSelectedPreviewID(repeatingIndex);
        }
      });
    }
  };

  /**
   * @function createThumbnails
   * in this function I've defined five thumbnails
   * using a stack (in this case it's 4)
   */

  const createThumbnails = () => {
    let accumulator = 4;
    const minis = [];

    // first img should be always in thumbnails
    minis.push(images[0]);

    images.forEach((img, index) => {
      if (minis.length === 5) return;
      if (index === accumulator) {
        minis.push(img);
        accumulator += 4;
      }
    });

    setThumbnails(minis);
  };

  const fullScreenHandler = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }

    document.body.requestFullscreen();
  };

  const viewerFiledProps = {
    onMouseUp: () => setDrag(false),
    onTouchEnd: () => setDrag(false),
    onTouchStart: () => setDrag(true),
    onMouseDown: (e) => {
      e.preventDefault();
      setDrag(true);
    },

    onTouchMove: touchHandler,
    onMouseMove: mouseMoveHandler,
  };


  const currentImgIndex = currentImg <= 0 ? 0 : currentImg - 1;

  return (
    <PVWrapper>
      <PVContainer>
        <PVMainImgContainer>
          <PVCurrentImgContainer>
            <PVCurrentImg src={images[currentImgIndex].src} />
          </PVCurrentImgContainer>
          <ViewerField {...viewerFiledProps} />
          <FullScreenIconContainer onClick={fullScreenHandler}>
            <FullscreenIcon />
            Full Screen
          </FullScreenIconContainer>
        </PVMainImgContainer>
        <ProductViewerThumbnails
          thumbnails={thumbnails}
          selectedPreviewID={selectedPreviewID}
          selectPreviewHandlerByClick={selectPreviewHandlerByClick}
        />
      </PVContainer>
      {fullScreenOpen && (
        <FullScreenWrapper>
          <FullScreenContainer>
            <PVMainImgContainer fullscreen={fullScreenOpen}>
              <PVCurrentImgContainer>
                <PVCurrentImg src={images[currentImg - 1].src} />
              </PVCurrentImgContainer>
              <ViewerField {...viewerFiledProps} />
              <FullScreenIconContainer
                onClick={fullScreenHandler}
                fullscreen={fullScreenOpen}
              >
                <FullscreenExitIcon />
                Exit Full Screen
              </FullScreenIconContainer>
            </PVMainImgContainer>
          </FullScreenContainer>
        </FullScreenWrapper>
      )}
    </PVWrapper>
  );
};

export default ProductViewer;

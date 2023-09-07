import styled from "styled-components";

// PV = ProductViewer

export const PVWrapper = styled.div``;

export const PVContainer = styled.div``;

export const PVMainImgContainer = styled.div`
  position: relative;
`;

export const PVCurrentImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PVCurrentImg = styled.img`
  width: 100%;
`;

export const PVPreviewImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PVPreviewImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px 70px;

  @media (max-width: 425px) {
    padding: 0;
    margin: 0px 10px;
    border: none;
  }
`;

export const PVPreviewImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 20px 0;
  margin: 0 5px;
  opacity: 0.9;
  border: ${({ selected }) =>
    selected ? "1px solid black" : "1px solid transparent"};
  border-radius: 5px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &::after {
    width: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    box-sizing: border-box;
    border-radius: 5px;
    opacity: 0.03;
  }

  @media (max-width: 425px) {
    padding: 10px 5px;
    // border: none;
  }
`;

export const testSuka = styled.div``;

export const PVPreviewImg = styled.img`
  width: 100px;

  @media (max-width: 425px) {
    width: 40px;
  }
`;

export const ViewerField = styled.div`
  cursor: grab;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

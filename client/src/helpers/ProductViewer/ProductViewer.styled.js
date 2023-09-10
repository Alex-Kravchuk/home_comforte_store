import styled from "styled-components";
import { viewport_sizes } from "../../utils/viewport_size_consts";

// PV = ProductViewer

const { xxl, xl, l, ml, m, s, xs } = viewport_sizes;

export const PVWrapper = styled.div``;

export const PVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  width: 70%;

  @media (max-width: ${xl}px) {
    width: 100%;
  }
`;

export const PVPreviewImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px 70px;

  @media (max-width: ${xxl}px) {
    padding: 20px 35px;
  }

  @media (max-width: 1200px) {
    padding: 15px 30px;
  }

  @media (max-width: ${l}px) {
    border: none;
  }

  @media (max-width: ${m}px) {
    padding: 0;
    margin: 0px 10px;
  }
`;

export const PVPreviewImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 0;
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

  @media (max-width: ${xl}px) {
    width: 80px;
  }

  @media (max-width: ${l}px) {
    width: 70px;
    margin: 0 5px;
  }

  @media (max-width: ${ml}px) {
    width: 60px;
  }

  @media (max-width: ${m}px) {
    padding: 5px 0px;
    width: 50px;
  }
`;

export const PVPreviewImg = styled.img`
  width: 100%;
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

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

export const PVPreviewImgContainer = styled.div``;

export const PVPreviewImg = styled.img`
  width: 200px;
  border: 1px solid lightgray;
  margin: 5px;
`;

export const ViewerField = styled.div`
  cursor: grab;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

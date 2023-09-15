import styled from "styled-components";

import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const DemonstrationWrapper = styled.div`
  flex: 1 1 70%;
  position: relative;
  height: auto;

  @media (max-width: ${xl}px) {
    margin-bottom: 20px;
  }
`;
export const DemonstrationContainer = styled.div``;

export const ViewerModeButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin-top: 20px;
`;
export const ViewerModeButtonContainer = styled.div`
  cursor: pointer;
  display: inline-flex;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 5px;
  background: #fff;
  margin-top: 10px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  svg {
    color: rgba(0, 0, 0, 0.4);
    font-size: 22px;
  }

  ${({ zoomOn }) =>
    zoomOn &&
    `
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 0);
`}
`;

export const ViewerModeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

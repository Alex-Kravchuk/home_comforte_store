import styled from "styled-components";

export const CanSwipeTipWrapper = styled.div`
  display: ${({ touch }) => (touch ? "none" : "flex")};
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);

  svg {
    color: #000;
  }
`;
export const CanSwipeTipIconContainer = styled.div`
  position: relative;
  animation-name: moveicon;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes moveicon {
    0% {
      left: 65%;
    }

    50% {
      left: 35%;
    }
    100% {
      left: 65%;
    }
  }
`;

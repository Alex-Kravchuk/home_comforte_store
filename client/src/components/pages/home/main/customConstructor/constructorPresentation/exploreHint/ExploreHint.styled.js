import styled from "styled-components";

import { viewport_sizes } from "../../../../../../../utils/vieport_size_consts";
import { getResponsiveFontSize } from "../../../../../../../helpers/getResponsiveFontSize";


const { l, m } = viewport_sizes;

export const ExploreTipContainer = styled.div`
  width: auto;
  font-size: ${getResponsiveFontSize(16, 14)};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, 0);
  background: rgba(0, 0, 0, 0.65);
  border-radius: 5px;
  padding: 8px 10px;
  transition: all 0.3s ease;
  opacity: ${({ active }) => (active ? "0" : "1")};
  visibility: ${({ active }) => (active ? "hidden" : "visible")};

  @media (max-width: ${l}px) {
    padding: 10px 10px;
    bottom: 40%;
  }

  @media (max-width: ${m}px) {
    padding: 10px 5px;
  }
`;
export const ExploreTipText = styled.div`
  white-space: nowrap;
  padding: 0 15px;

  @media (max-width: ${m}px) {
    padding: 0 10px;
  }
`;
export const ExploreTipArrow = styled.div`
  svg {
    font-size: ${getResponsiveFontSize(18, 14)};
    margin-top: 5px;
  }
`;

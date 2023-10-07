import styled from "styled-components";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { swiperStyles } from "../../../../../../styles/globalStyles";

const { xl } = viewport_sizes;

export const ListTypeWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;

  box-shadow: inset 0 0 2px 0.5px rgba(21, 21, 21, 0.05),
    inset 0 0 5px 0 rgba(21, 21, 21, 0.15);

  overflow: auto;
  max-height: 250px;

  ${swiperStyles};

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.45);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.65);
  }

  @media (max-width: ${xl}px) {
    overflow: unset;
  }
`;
export const ListTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: ${xl}px) {
    display: block;
  }
`;
export const ListTypeModifierContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    div:nth-child(1) {
      div {
        border: 4px solid rgba(192, 192, 192, 1);
      }
    }
  }

  @media (max-width: ${xl}px) {
    padding-bottom: 15px;
  }
`;

export const ModifierImgContainer = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
`;

export const ModifierImgBorderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 71px;
  height: 71px;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(0, 0, 0, 0);
  transition: all 0.2s ease;
`;
export const ModifierImg = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const ModifieTitle = styled.div`
  text-align: center;
  font-size: 14px;
`;
export const ModifierDescr = styled.div`
  text-align: center;
  font-size: 12px;
`;

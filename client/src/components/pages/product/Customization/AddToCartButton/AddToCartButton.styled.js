import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

export const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 25px 0;
`;
export const CartButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  background: rgb(16, 64, 16, 0.65);
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: rgb(16, 64, 16, 0.85);
  }

  &:active {
    top: 2px;
  }

  font-size: ${getResponsiveFontSize(20, 18)};
`;
export const CartButtonPriceContainer = styled.div`
  margin-right: 25px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -15px;
    width: 1px;
    height: 100%;
    background: #fff;
  }
`;
export const CartButtonPrice = styled.div``;

export const CartButtonIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 5px;
  }
`;

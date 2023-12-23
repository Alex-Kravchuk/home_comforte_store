import { Input } from "antd";
import styled from "styled-components";
import { SeatSizeContainer } from "../../../../../../product/Demonstration/ProductDetails/SeatSize/SeatSize.styled";


// DI

export const DILabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    margin-right: 10px;
  }
`;

export const DIInput = styled(Input)`
  margin-left: 20px;
  width: 70%;
  height: 30px;
  font-size: 16px;
`;

export const DISeatSizeContainer = styled(SeatSizeContainer)`
  position: relative;
  margin: 20px 0;
  padding: ${({ isEmpty }) => (isEmpty ? "20px" : "0")};

  &:hover {
    & > div:last-child {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const DIImageContainer = styled.div`
  margin-top: 50px;
`;

export const DIAddRemoveInterfaceContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  margin-top: 5px;

  svg {
    font-size: 30px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease;
  }

  svg:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const IterfaceContainerItem = styled.div`
  svg {
    cursor: ${({ lineIsNotTheLast }) =>
      lineIsNotTheLast ? "pointer" : "not-allowed"};
  }

  svg:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

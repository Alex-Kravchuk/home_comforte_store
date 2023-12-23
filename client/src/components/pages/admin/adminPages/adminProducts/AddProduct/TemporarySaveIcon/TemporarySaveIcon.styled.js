import { Button } from "antd";
import styled from "styled-components";

// TSI

export const TSIButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
`;

export const TSIWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;

  svg {
    font-size: 24px;
    cursor: pointer;
    color: inherit;
    margin-left: 10px;
  }

  svg:last-child {
    margin-left: 0;
  }
`;

export const TSIContainer = styled.div`
  display: flex;

  button:nth-child(2) {
    margin-left: 10px;
    color: red;
  }
`;

export const TSIErrorContainer = styled.div`
  font-size: 16px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease;

  ${({ error }) =>
    error &&
    ` 
    visibility: visible;
    opacity: 1;
  `}
`;

export const TSIErrorText = styled.div`
  color: red;
  font-size: 15px;
  text-align: justify;
  padding-right: 25px;
  line-height: 18px;
`;

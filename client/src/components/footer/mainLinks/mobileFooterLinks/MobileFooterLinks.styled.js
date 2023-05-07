import { Collapse } from "antd";
import styled from "styled-components";
import { textColors } from "../../../../styles/globalStyles";

// MFL - MobileFooterLinks

export const MFLWrapper = styled(Collapse)`
  width: 100%;
  background: #fff;
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0;

  .ant-collapse-item:last-child {
    border-radius: 0;
  }

  .ant-collapse-item {
    padding: 5px 0;
  }
`;

export const MFLItem = styled.div`
  color: ${textColors.plain};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  left: 0;
  margin-bottom: 10px;

  &:hover {
    left: 5px;
  }
`;

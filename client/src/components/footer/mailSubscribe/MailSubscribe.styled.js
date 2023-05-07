import styled from "styled-components";

import { Input } from "antd";

import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";
import { textColors } from "../../../styles/globalStyles";

const { l, xs } = viewport_sizes;

export const MailSubscribeWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 45px 0;

  @media (max-width: ${xs}px) {
    padding: 35px 0;
  }
`;

export const MailSubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${l}px) {
    flex-direction: column;
  }
`;
// ---title------------------------------------------------------------------------------------
export const MailSubscribeTitlesContainer = styled.div`
  width: 100%;
  padding-right: 30px;

  @media (max-width: ${l}px) {
    padding: 0;
  }
`;
export const MailSubscribeTitle = styled.div`
  font-size: ${getResponsiveFontSize(24, 22)};
  color: ${textColors.title};
  margin-bottom: 10px;
`;
export const MailSubscribeSubTitle = styled.div`
  font-size: ${getResponsiveFontSize(18, 16)};

  padding-bottom: 30px;
`;

// ---input------------------------------------------------------------------------------
export const MailSubscribeInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const CustomIntput = styled(Input)`
  font-size: ${getResponsiveFontSize(18, 14)};
  width: 100%;
  height: 60px;

  @media (max-width: ${xs}px) {
    height: 50px;
  }
`;
export const MailSubscribeSubmitBtn = styled.div`
  font-size: ${getResponsiveFontSize(18, 14)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  white-space: nowrap;
  height: 60px;
  box-sizing: border-box;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #000000;
    border: 1px solid #000;
  }

  @media (max-width: ${xs}px) {
    height: 50px;
  }
`;

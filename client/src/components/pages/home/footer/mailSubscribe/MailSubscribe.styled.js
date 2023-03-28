import styled from "styled-components";
import { Input } from "antd";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

export const MailSubscribeWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 45px 0;

  @media (max-width: ${viewport_sizes.xs}px) {
    padding: 35px 0;
  }
`;

export const MailSubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${viewport_sizes.l}px) {
    flex-direction: column;
  }
`;

export const MailSubscribeTitlesContainer = styled.div`
  width: 100%;
  padding-right: 30px;

  @media (max-width: ${viewport_sizes.l}px) {
    padding: 0;
  }
`;
export const MailSubscribeTitle = styled.div`
  font-size: ${getResponsiveFontSize(24, 22)};
  color: black;
  margin-bottom: 10px;
`;
export const MailSubscribeSubTitle = styled.div`
  font-size: ${getResponsiveFontSize(18, 16)};
  color: #676564;
  padding-bottom: 30px;
`;

// input---------------------
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

  @media (max-width: ${viewport_sizes.xs}px) {
    height: 50px;
  }
`;
export const MailSubscribeSubmitBtn = styled.div`
  font-size: ${getResponsiveFontSize(18, 14)};
  color: #555759;
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

  @media (max-width: ${viewport_sizes.xs}px) {
    height: 50px;
  }
`;

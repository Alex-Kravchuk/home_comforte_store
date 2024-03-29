import styled from "styled-components";
import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: ${xl}px) {
    flex: 1 1 60%;
  }
`;

export const LogoTitle = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  font-size: ${getResponsiveFontSize(24, 18)};
`;

export const LogoTitlePart = styled.div``;

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

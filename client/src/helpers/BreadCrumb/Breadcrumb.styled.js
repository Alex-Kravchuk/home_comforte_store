import styled from "styled-components";
import { sizes } from "../../utils/css_size_consts";
import { viewport_sizes } from "../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const BreadCrumbWrapper = styled.div`
  padding-top: 15px;

  @media (max-width: ${l}px) {
    width: ${sizes.l.contentContainerWidth}%;
    margin: 0 auto;
	padding-top: 10px;
  }
`;

import styled from "styled-components";
import { sizes } from "../../utils/css_size_consts";
import { viewport_sizes } from "../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const BreadCrumbWrapper = styled.div`
  padding-top: 25px;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const BreadCrumbItem = styled.span``;

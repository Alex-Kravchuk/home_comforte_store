import styled from "styled-components";
import { sizes } from "../../utils/css_size_consts";
import { viewport_sizes } from "../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const BreadCrumbWrapper = styled.div`
  padding: 25px 0;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BreadCrumbItem = styled.span`
  padding: 4px;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.035);
  }

  @media (max-width: 430px) {
    font-size: 14px;
  }
`;



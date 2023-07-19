import styled from "styled-components";

import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl, l, m } = viewport_sizes;

//  OCA = OfferCreateAccount

export const OCAWrapper = styled.div`
  background: #f3f5f0;
  margin: 0 0 0 50px;

  .ant-btn-primary,
  .ant-btn.ant-btn-lg {
    background-color: #9ca6a1;
  }

  .ant-btn-primary:hover {
    background-color: #838a86;
  }

  @media (max-width: ${xl}px) {
    margin: 0 0 0 20px;
  }

  @media (max-width: ${l}px) {
    width: 100%;
    margin: 0;
  }
`;
export const OCAContainer = styled.div`
  padding: 50px;

  @media (max-width: ${xl}px) {
    padding: 25px;
  }

  a {
    text-decoration: none;
  }
`;

export const OCAOffersList = styled.ul`
  margin: 0 0 30px 25px;
`;
export const OCAListItem = styled.li`
  padding: 15px 0;

  @media (max-width: ${m}px) {
    padding: 10px 0;
  }
`;

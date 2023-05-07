import styled from "styled-components";

import { Button } from "antd";

import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl, l, m } = viewport_sizes;

//  OCA - OCA

export const OCAWrapper = styled.div`
  background: #f3f5f0;
  margin: 0 50px;

  .ant-btn-primary {
    background-color: #b3bac7;
  }

  .ant-btn-primary:hover {
    background-color: #8e949e;
  }

  @media (max-width: ${xl}px) {
    margin: 0 20px;
  }

  @media (max-width: ${l}px) {
    width: 100%;
  }
`;
export const OCAContainer = styled.div`
  padding: 50px;

  @media (max-width: ${xl}px) {
    padding: 25px;
  }
`;

export const OCAOffersList = styled.ul`
  margin-left: 25px;
`;
export const OCAListItem = styled.li`
  padding: 15px 0;

  @media (max-width: ${m}px) {
    padding: 10px 0;
  }
`;

export const OCAButton = styled(Button)`
  margin-top: 30px;
`;

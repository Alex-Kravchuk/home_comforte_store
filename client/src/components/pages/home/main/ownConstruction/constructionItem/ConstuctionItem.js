import React from "react";

import { Card } from "antd";

import ConstructionItemDescription from "./ConstructionItemDescription";

import {
  ConstructionItemImg,
  ConstructionItemWrap,
  ConstructionItemTitle,
} from "./ConstructionItem.styled";

const { Meta } = Card;

const ConstructionItem = ({ srcImg, title, descr, buttons }) => {
  return (
    <ConstructionItemWrap
      bordered={false}
      hoverable
      cover={<ConstructionItemImg src={srcImg} />}
    >
      <Meta
        title={<ConstructionItemTitle>{title}</ConstructionItemTitle>}
        description={
          <ConstructionItemDescription descr={descr} buttons={buttons} />
        }
      />
    </ConstructionItemWrap>
  );
};

export default ConstructionItem;

import { Card } from "antd";
import React from "react";
import {
  ConstructionItemImg,
  ConstructionItemTitle,
  ConstructionItemWrap,
} from "./ConstructionItem.styled";
import ConstructionItemDescription from "./ConstructionItemDescription";

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

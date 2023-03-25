import React from "react";
import { Container } from "../../../../../styles/globalStyles";
import ConstructionItem from "./constructionItem/ConstuctionItem";
import {
  OwnConstructionContainer,
  OwnConstructionWrapper,
  ConstructionTitle,
} from "./OwnConstruction.styled";

import { Col, Row, Grid } from "antd";
import { constructionItemsConfig } from "./constructionItem/itemsConfig";

import { useGetWindowSize } from "../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../utils/vieport_size_consts";

// const { useBreakpoint } = Grid;

const OwnConstruction = () => {
  // const screens = useBreakpoint();
  const viewport = useGetWindowSize();
  const smallScreen = viewport.width < viewport_sizes.l;

  return (
    <OwnConstructionWrapper>
      <Container>
        <ConstructionTitle>
          All you need for your perfect piece
        </ConstructionTitle>
        <Row
          gutter={[20, 24]}
          wrap
          align="middle"
          justify={smallScreen ? "center" : "start"}
        >
          {constructionItemsConfig.map(
            ({ id, description, title, buttons, img }) => (
              <Col
                xs={{
                  span: 24,
                }}
                lg={{
                  span: 8,
                }}
                key={id}
              >
                <ConstructionItem
                  srcImg={img}
                  descr={description}
                  title={title}
                  buttons={buttons}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </OwnConstructionWrapper>
  );
};

export default OwnConstruction;

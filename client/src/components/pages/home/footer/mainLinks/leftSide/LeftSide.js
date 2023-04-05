import React from "react";
import {
  CustomCollapse,
  MLColumn,
  MLColumnTitle,
  MLItem,
  MLItemsContainer,
} from "../MainLinks.styled";

import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";
import { leftSideConfig } from "./leftSideConfig";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { Collapse } from "antd";
import CollapseOwnIcon from "./collapseOwnIcon/CollapseOwnIcon";

const { Panel } = Collapse;

const LeftSide = () => {
  const viewport = useGetWindowSize();
  const smallScreen = viewport.width <= viewport_sizes.l;
  return (
    <MLItemsContainer>
      {smallScreen ? (
        <CustomCollapse
          accordion
          expandIconPosition="end"
          expandIcon={({isActive}) => <CollapseOwnIcon open={isActive} />}
        >
          {leftSideConfig.map(({ title, id, subTitles }) => (
            <Panel header={title} key={id}>
              {subTitles.map((subTit, index) => (
                <MLItem key={index}>{subTit}</MLItem>
              ))}
            </Panel>
          ))}
        </CustomCollapse>
      ) : (
        leftSideConfig.map(({ id, title, subTitles }) => (
          <MLColumn key={id}>
            <MLColumnTitle>{title}</MLColumnTitle>
            {subTitles.map((subTit, index) => (
              <MLItem key={index}>{subTit}</MLItem>
            ))}
          </MLColumn>
        ))
      )}
    </MLItemsContainer>
  );
};

export default LeftSide;

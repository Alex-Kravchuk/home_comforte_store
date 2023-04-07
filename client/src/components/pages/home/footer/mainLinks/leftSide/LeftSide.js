import React from "react";

import { Collapse } from "antd";

import { leftSideConfig } from "./leftSideConfig";
import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

import ExpandIcon from "../../../../../../helpers/ExpandIcon/ExpandIcon";

import {
  MLItem,
  MLColumn,
  MLColumnTitle,
  CustomCollapse,
  MLItemsContainer,
} from "../MainLinks.styled";

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
          expandIcon={({ isActive }) => <ExpandIcon open={isActive} />}
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

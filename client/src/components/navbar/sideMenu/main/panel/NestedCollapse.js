import React from "react";

import { Collapse } from "antd";

import PanelHeader from "./PanelHeader";

import { NestedPanelWrapper } from "./Panel.styled";
import { SideMenuSubItem } from "../SideMenuMain.styled";

const NestedCollapse = ({ type }) => {
  const { img, name, subTypes } = type;

  return (
    <Collapse accordion expandIconPosition="start" ghost>
      <NestedPanelWrapper
        header={<PanelHeader text={name} img={img} />}
        collapsible={subTypes.length === 0 && "disabled"}
        showArrow={subTypes.length !== 0}
      >
        {subTypes.map(({ name }) => (
          <SideMenuSubItem>{name}</SideMenuSubItem>
        ))}
      </NestedPanelWrapper>
    </Collapse>
  );
};

export default NestedCollapse;

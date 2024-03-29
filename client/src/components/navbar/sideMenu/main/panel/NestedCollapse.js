import React from "react";

import { Collapse } from "antd";

import PanelHeader from "./PanelHeader";

import { NestedPanelWrapper } from "./Panel.styled";
import { SideMenuSubItem } from "../SideMenuMain.styled";

const NestedCollapse = ({ type, redirectHandler }) => {
  const { icon, name, subTypes } = type;

  return (
    <Collapse accordion expandIconPosition="start" ghost>
      <NestedPanelWrapper
        header={<PanelHeader text={name} img={icon} />}
        collapsible={subTypes.length === 0 && "disabled"}
        showArrow={subTypes.length !== 0}
        onClick={
          subTypes.length === 0 ? () => redirectHandler(type.name) : null
        }
      >
        {subTypes.map((subType) => (
          <SideMenuSubItem onClick={() => redirectHandler(type.name, subType.name)}>
            {subType.name}
          </SideMenuSubItem>
        ))}
      </NestedPanelWrapper>
    </Collapse>
  );
};

export default NestedCollapse;

import React from "react";

import { Collapse } from "antd";

import ExpandIcon from "../../../../../../helpers/ExpandIcon/ExpandIcon";
import { mobileFooterLinks_leftSide_config } from "./mobileFooterLinks_config";

import { MFLWrapper, MFLItem } from "./MobileFooterLinks.styled";

const { Panel } = Collapse;

const MobileFooterLinks = () => {
  return (
    <MFLWrapper
      accordion
      expandIconPosition="end"
      expandIcon={({ isActive }) => <ExpandIcon open={isActive} />}
    >
      {mobileFooterLinks_leftSide_config.map(({ title, id, subTitles }) => (
        <Panel header={title} key={id}>
          {subTitles.map((subTit, index) => (
            <MFLItem key={index}>{subTit}</MFLItem>
          ))}
        </Panel>
      ))}
    </MFLWrapper>
  );
};

export default MobileFooterLinks;

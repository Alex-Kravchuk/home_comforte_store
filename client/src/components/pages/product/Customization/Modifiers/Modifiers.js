import React from "react";
import { ModifiersContainer, ModifiersWrapper } from "./Modifiers.styled";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "Choose Fabric",
    children: <p>Here rou can choose fabric</p>,
  },
  {
    key: "2",
    label: "Choose Legs",
    children: <p>Here rou can choose legs</p>,
  },
  {
    key: "3",
    label: "Choose Cushion Fill",
    children: <p>Here rou can choose legasdasds</p>,
  },
];

const Modifiers = () => {
  return (
    <ModifiersWrapper>
      <ModifiersContainer>
        <Collapse
          size="large"
          items={items}
          defaultActiveKey={["1"]}
          expandIconPosition="end"
        />
      </ModifiersContainer>
    </ModifiersWrapper>
  );
};

export default Modifiers;

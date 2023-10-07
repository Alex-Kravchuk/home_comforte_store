import React, { useEffect, useState } from "react";
import { ModifiersContainer, ModifiersWrapper } from "./Modifiers.styled";
import { Collapse } from "antd";
import { modifiersMock } from "../../../../../assets/mock/modifiers/modifiersMock";
import { defineModifier } from "../../../../../helpers/defineModifier/defineModifier";

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
  const [modifiers, setModifiers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO add loading when data are fething
    const modifiersItems = modifiersMock.map((item) => defineModifier(item));
    setModifiers(modifiersItems);
    
  }, []);
  return (
    <ModifiersWrapper>
      <ModifiersContainer>
        <Collapse
          size="large"
          items={modifiers}
          defaultActiveKey={["1"]}
          expandIconPosition="end"
        />
      </ModifiersContainer>
    </ModifiersWrapper>
  );
};

export default Modifiers;

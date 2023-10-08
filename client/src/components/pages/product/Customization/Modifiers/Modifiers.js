import React, { useEffect, useState } from "react";

import { Collapse } from "antd";

import { modifiersMock } from "../../../../../assets/mock/modifiers/modifiersMock";
import { defineModifier } from "../../../../../helpers/defineModifier/defineModifier";

import { ModifiersContainer, ModifiersWrapper } from "./Modifiers.styled";

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

import React, { useEffect, useState } from "react";

import { Collapse, Empty } from "antd";

import { modifiersMock } from "../../../../../assets/mock/modifiers/modifiersMock";
import { defineModifier } from "../../../../../helpers/defineModifier/defineModifier";

import { ModifiersContainer, ModifiersWrapper } from "./Modifiers.styled";

const Modifiers = ({
  data,
  // modifierHandlers,
  selectedOptionHandler,
  filterOptionsHandler,
}) => {
  const [modifiers, setModifiers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO add loading when data are fething

    const modifiersItems = data.map((item) =>
      defineModifier(item, selectedOptionHandler, filterOptionsHandler)
    );

    setModifiers(modifiersItems);
  }, [data, filterOptionsHandler]);

  return (
    <ModifiersWrapper>
      <ModifiersContainer>
        {data.length === 0 ? (
          <Empty description="There are no customization options" />
        ) : (
          <Collapse
            size="large"
            items={modifiers}
            defaultActiveKey={["1"]}
            expandIconPosition="end"
          />
        )}
      </ModifiersContainer>
    </ModifiersWrapper>
  );
};

export default Modifiers;

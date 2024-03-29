import React, { useEffect, useState } from "react";

import { Collapse, Empty } from "antd";

import { defineModifier } from "../../../../../helpers/defineModifier/defineModifier";

import { ModifiersContainer, ModifiersWrapper } from "./Modifiers.styled";

const Modifiers = ({ data, filtersHandler }) => {
  const [modifiers, setModifiers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO add loading when data are fething

    const modifiersItems = data.map((item) =>
      defineModifier(item, filtersHandler)
    );

    setModifiers(modifiersItems);
  }, [data, filtersHandler]);

  return (
    <ModifiersWrapper>
      <ModifiersContainer>
        {data.length === 0 ? (
          <Empty description="There are no customization options" />
        ) : (
          <Collapse
            accordion
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

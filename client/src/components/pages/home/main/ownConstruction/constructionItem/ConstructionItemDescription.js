import React from "react";

import {
  ConstructionItemButton,
  ConstructionItemDescrText,
  ConstructionItemDescrWrap,
  ConstructionItemButtonText,
  ConstructionItemButtonContainer,
} from "./ConstructionItem.styled";

const ConstructionItemDescription = ({ descr, buttons }) => {
  const { redirectBtn1, redirectBtn2 } = buttons;

  return (
    <ConstructionItemDescrWrap>
      <ConstructionItemDescrText>{descr}</ConstructionItemDescrText>
      <ConstructionItemButtonContainer>

        <ConstructionItemButton>
          {redirectBtn1.icon}
          <ConstructionItemButtonText>
            {redirectBtn1.text}
          </ConstructionItemButtonText>
        </ConstructionItemButton>

        <ConstructionItemButton>
          {redirectBtn2.icon}
          <ConstructionItemButtonText>
            {redirectBtn2.text}
          </ConstructionItemButtonText>
        </ConstructionItemButton>

      </ConstructionItemButtonContainer>
    </ConstructionItemDescrWrap>
  );
};

export default ConstructionItemDescription;

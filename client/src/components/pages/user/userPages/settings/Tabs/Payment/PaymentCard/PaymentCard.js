import React, { useState } from "react";
import {
  PCButton,
  PCButtonGroupe,
  PCCheckbox,
  PCContainer,
  PCExpiry,
  PCIcon,
  PCIconContainer,
  PCInfoContainer,
  PCNumber,
  PCNumberContainer,
  PCWrapper,
} from "./PaymentCard.styled";

import mastercard_icon from "../../../../../../../../assets/icons/mastercard-icon.png";
import visa_icon from "../../../../../../../../assets/icons/visa-icon.png";
import { Checkbox, Popconfirm } from "antd";

const PaymentCard = ({ checkedCard, checkedHandler, card, changeCards }) => {
  const [checked, setChecked] = useState(false);

  const paymentSystemIcon =
    card.system === "visa" ? visa_icon : mastercard_icon;
  const selecteByDefault = card.id === checkedCard.id;

  const onCheckedHandler = () => {
    setChecked((state) => !state);
    checkedHandler(card);
  };

  const confirmRemove = () => {
    console.log("This card was removed!");
    changeCards((state) => state.filter((item) => item.id !== card.id));
  };

  console.log(checkedCard, card.id);
  return (
    <PCWrapper onClick={onCheckedHandler}>
      <PCContainer>
        <PCIconContainer>
          <PCIcon src={paymentSystemIcon} />
        </PCIconContainer>
        <PCInfoContainer>
          <PCNumberContainer>
            <PCNumber>5163********1246</PCNumber>
            <PCCheckbox>
              <Checkbox checked={checkedCard.id === card.id} />
            </PCCheckbox>
          </PCNumberContainer>
          <PCExpiry>Expiry 06/2024</PCExpiry>
          <PCButtonGroupe>
            <PCButton>Edit</PCButton>
            <Popconfirm
              title="Remove the card"
              description="Are you sure to remove this card?"
              okText="Yes"
              cancelText="No"
              onConfirm={confirmRemove}
            >
              <PCButton>Remove</PCButton>
            </Popconfirm>
          </PCButtonGroupe>
        </PCInfoContainer>
      </PCContainer>
    </PCWrapper>
  );
};

export default PaymentCard;

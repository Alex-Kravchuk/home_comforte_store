import React from "react";

import { Checkbox, Popconfirm } from "antd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import {
  PCIcon,
  PCButton,
  PCExpiry,
  PCNumber,
  PCWrapper,
  PCCheckbox,
  PCContainer,
  PCButtonGroupe,
  PCIconContainer,
  PCInfoContainer,
  PCCardHolderName,
  PCNumberContainer,
  PCStopPropagationBlock,
} from "./PaymentCard.styled";

import visa_icon from "../../../../../../../../assets/icons/visa-icon.png";
import mastercard_icon from "../../../../../../../../assets/icons/mastercard-icon.png";

const PaymentCard = ({
  checkedCard,
  checkedHandler,
  card,
  cards,
  changeCards,
}) => {
  const { paymentsystem, number, expiry, cardholdername } = card;

  const paymentSystemIcon =
    paymentsystem === "visa" ? visa_icon : mastercard_icon;

  const onCheckedHandler = () => {
    checkedHandler(card);
  };

  const confirmRemove = () => {
    console.log("This card was removed!");
    const cardsWithoutDeletedCard = cards.filter((item) => item.id !== card.id);
    const cardsWithCorrectIds = cardsWithoutDeletedCard.map((item, index) => {
      item.id = index + 1;
      return item;
    });

    changeCards(cardsWithCorrectIds);
  };

  const hiddenCardNumber = (number) => {
    const firstFourNumbers = number.slice(0, 4);
    const lastFourNumbers = number.slice(number.length - 4, number.length);
    const hiddenNumber = firstFourNumbers + "********" + lastFourNumbers;

    return hiddenNumber;
  };

  return (
    <PCWrapper onClick={onCheckedHandler}>
      <PCContainer>
        <PCIconContainer>
          <PCIcon src={paymentSystemIcon} />
        </PCIconContainer>
        <PCInfoContainer>
          <PCNumberContainer>
            <PCNumber>{hiddenCardNumber(number)}</PCNumber>
            <PCCheckbox>
              <Checkbox checked={checkedCard.number === number} />
            </PCCheckbox>
          </PCNumberContainer>
          <PCExpiry>Expiry {expiry}</PCExpiry>
          <PCButtonGroupe>
            <PCCardHolderName>{cardholdername}</PCCardHolderName>
            <PCStopPropagationBlock onClick={(e) => e.stopPropagation()}>
              <Popconfirm
                title="Remove the card"
                description="Are you sure to remove this card?"
                okText="Yes"
                cancelText="No"
                onConfirm={confirmRemove}
              >
                <PCButton>
                  <DeleteOutlineIcon />
                </PCButton>
              </Popconfirm>
            </PCStopPropagationBlock>
          </PCButtonGroupe>
        </PCInfoContainer>
      </PCContainer>
    </PCWrapper>
  );
};

export default PaymentCard;

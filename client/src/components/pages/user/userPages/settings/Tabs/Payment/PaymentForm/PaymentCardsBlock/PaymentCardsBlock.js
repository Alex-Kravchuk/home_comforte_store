import React, { useState } from "react";

import PaymentCard from "../../PaymentCard/PaymentCard";
import { FromSubmitButton } from "../../../../../../../../../styles/formComponentStyles";

import AddCardIcon from "@mui/icons-material/AddCard";

import {
  PFTitle,
  PFBlock,
  PFSubTitle,
  PFTitleBlock,
  PFFormItemGroupe,
  PFCardList,
  PFAddCardContainer,
  PFAddCardIcon,
  PFAddCardText,
} from "../PaymentForm.styled";



const PaymentCardsBlock = ({ checkedCard, loading, checkedHandler }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      system: "visa",
      number: 1231241341123123,
      expiry: "01/2024",
    },
    {
      id: 2,
      system: "mastercard",
      number: 51687461248492313,
      expiry: "07/2022",
    },
  ]);
  return (
    <PFBlock>
      <PFTitleBlock>
        <PFTitle>Card details</PFTitle>
        <PFSubTitle>Select default payment method</PFSubTitle>
      </PFTitleBlock>
      <PFFormItemGroupe>
        <PFCardList>
          {cards.map((card) => (
            <PaymentCard
              checkedCard={checkedCard}
              key={card.id}
              card={card}
              checkedHandler={checkedHandler}
			  changeCards={setCards}
            />
          ))}
          <PFAddCardContainer>
            <AddCardIcon />
            <PFAddCardText>Add a new card</PFAddCardText>
          </PFAddCardContainer>
        </PFCardList>

        <FromSubmitButton
          type="primary"
          size="large"
          htmlType="submit"
          loading={loading}
        >
          Save changes
        </FromSubmitButton>
      </PFFormItemGroupe>
    </PFBlock>
  );
};

export default PaymentCardsBlock;

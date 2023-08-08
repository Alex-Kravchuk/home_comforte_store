import React, { useState } from "react";

import AddNewCard from "../AddNewCard/AddNewCard";
import PaymentCard from "../../PaymentCard/PaymentCard";

import {
  PFTitle,
  PFBlock,
  PFSubTitle,
  PFCardList,
  PFTitleBlock,
  PFFormItemGroupe,
} from "../PaymentForm.styled";
import { FromSubmitButton } from "../../../../../../../../../styles/formComponentStyles";

import { userCards } from "../../../../../../../../../assets/mock/PaymentSettingsMOCK/paymentSettingsMOCK";

const PaymentCardsBlock = ({
  checkedCard,
  loading,
  checkedHandler,
  submitHandler,
}) => {
  const [cards, setCards] = useState(userCards);

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
              key={card.number}
              card={card}
              cards={cards}
              checkedHandler={checkedHandler}
              changeCards={setCards}
            />
          ))}
          <AddNewCard addNewCardHandler={setCards} cards={cards} />
        </PFCardList>

        <FromSubmitButton
          onClick={submitHandler}
          type="primary"
          size="large"
          loading={loading}
        >
          Save changes
        </FromSubmitButton>
      </PFFormItemGroupe>
    </PFBlock>
  );
};

export default PaymentCardsBlock;

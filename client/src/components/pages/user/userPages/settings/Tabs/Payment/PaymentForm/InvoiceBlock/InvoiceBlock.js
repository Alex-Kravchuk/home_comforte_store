import React from "react";

import { Checkbox } from "antd";

import { FormInput } from "../../../../../../../../../styles/formComponentStyles";

import {
  PFBlock,
  PFTitle,
  PFSubTitle,
  PFTitleBlock,
  PFCheckboxInfo,
  PFItemContainer,
  PFCheckboxLabel,
  PFFormItemGroupe,
} from "../PaymentForm.styled";

const InvoiceBlock = ({
  alternativeEmailRef,
  defaultEmailChecked,
  alternativeEmailChecked,
  defaultEmailHandler,
  alternativeEmailHandler,
}) => {
  return (
    <PFBlock>
      <PFTitleBlock>
        <PFTitle>Contact email</PFTitle>
        <PFSubTitle>Where should invoices be sent?</PFSubTitle>
      </PFTitleBlock>
      <PFFormItemGroupe>
        <PFItemContainer>
          <Checkbox
            checked={defaultEmailChecked}
            onChange={defaultEmailHandler}
          >
            <PFCheckboxLabel>Send to my account email</PFCheckboxLabel>
          </Checkbox>
          <PFCheckboxInfo>sodasoad450@gmail.com</PFCheckboxInfo>
        </PFItemContainer>

        <PFItemContainer>
          <Checkbox
            onChange={alternativeEmailHandler}
            checked={alternativeEmailChecked}
          >
            <PFCheckboxLabel>Send to an alternative email</PFCheckboxLabel>
          </Checkbox>
          <PFCheckboxInfo>
              <FormInput
                type="email"
                disabled={!alternativeEmailChecked}
                ref={alternativeEmailRef}
              />
          </PFCheckboxInfo>
        </PFItemContainer>
      </PFFormItemGroupe>
    </PFBlock>
  );
};

export default InvoiceBlock;

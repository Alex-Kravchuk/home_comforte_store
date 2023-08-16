import React from "react";
import { LabelButtonGroupe, LabelContainer, LabelName, LabelWraper, LableButton } from "./Label.styled";

const Label = ({children}) => {
  return (
    <LabelWraper>
      <LabelContainer>
        <LabelName>{children}</LabelName>
		<LabelButtonGroupe>
			<LableButton>Edit</LableButton>
			<LableButton>Delete</LableButton>
		</LabelButtonGroupe>
      </LabelContainer>
    </LabelWraper>
  );
};

export default Label;

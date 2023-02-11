import React, { useState } from "react";
import {
  CPContainer,
  CPImg,
  CPImgLowerContainer,
  CPImgUpperContainer,
  CPThumb,
  CPWrapper,
} from "./ConstructorPresentation.styled";

import sofa1 from "../../../../../../assets/img/constructor/constructor_sofa_1.jpg";
import sofa2 from "../../../../../../assets/img/constructor/constructor_sofa_2.jpg";
import Thumb from "./Thumb";

const ConstructorPresentation = () => {
  const [value, setValue] = useState(50);

  const changeWidthHandler = (e) => setValue(e.target.value);
  return (
    <CPWrapper>
      <CPContainer>
        <CPImgUpperContainer>
          <CPImg src={sofa1} />
        </CPImgUpperContainer>
        <CPImgLowerContainer width={value}>
          <CPImg src={sofa2} />
        </CPImgLowerContainer>
        <Thumb onChnageHandler={changeWidthHandler} shift={value} />
      </CPContainer>
    </CPWrapper>
  );
};

export default ConstructorPresentation;

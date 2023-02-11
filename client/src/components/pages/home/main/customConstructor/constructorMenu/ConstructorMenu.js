import React from "react";
import { CustomConstructorContainer } from "../CustomConstructor.styled";
import {
  ConstructorMenuContainer,
  ConstructorMenuOptionsItem,
  ConstructorMenuOptionsItemIcon,
  ConstructorMenuOptionsItemTitle,
  ConstructorMenuOptionsList,
  ConstructorMenuSubTitle,
  ConstructorMenuTitle,
  ConstructorMenuWrapper,
} from "./ConstructorMenu.styled";

const ConstructorMenu = () => {
  return (
    <ConstructorMenuWrapper>
      <ConstructorMenuContainer>
        <ConstructorMenuTitle>The individuality</ConstructorMenuTitle>
        <ConstructorMenuSubTitle>
          The possibility of making to order
        </ConstructorMenuSubTitle>
        <ConstructorMenuOptionsList>
          <ConstructorMenuOptionsItem>
            <ConstructorMenuOptionsItemIcon>
              icon
            </ConstructorMenuOptionsItemIcon>
            <ConstructorMenuOptionsItemTitle>
              20+ collections
            </ConstructorMenuOptionsItemTitle>
          </ConstructorMenuOptionsItem>

          <ConstructorMenuOptionsItem>
            <ConstructorMenuOptionsItemIcon>
              icon
            </ConstructorMenuOptionsItemIcon>
            <ConstructorMenuOptionsItemTitle>
              125+ fabrics
            </ConstructorMenuOptionsItemTitle>
          </ConstructorMenuOptionsItem>

          <ConstructorMenuOptionsItem>
            <ConstructorMenuOptionsItemIcon>
              icon
            </ConstructorMenuOptionsItemIcon>
            <ConstructorMenuOptionsItemTitle>
              20+ legs
            </ConstructorMenuOptionsItemTitle>
          </ConstructorMenuOptionsItem>
          <ConstructorMenuOptionsItem>
            <ConstructorMenuOptionsItemIcon>
              icon
            </ConstructorMenuOptionsItemIcon>
            <ConstructorMenuOptionsItemTitle>
              length & depths
            </ConstructorMenuOptionsItemTitle>
          </ConstructorMenuOptionsItem>

          <ConstructorMenuOptionsItem>
            <ConstructorMenuOptionsItemIcon>
              icon
            </ConstructorMenuOptionsItemIcon>
            <ConstructorMenuOptionsItemTitle>
              seat cushions
            </ConstructorMenuOptionsItemTitle>
          </ConstructorMenuOptionsItem>
        </ConstructorMenuOptionsList>
      </ConstructorMenuContainer>
    </ConstructorMenuWrapper>
  );
};

export default ConstructorMenu;

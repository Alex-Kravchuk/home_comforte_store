import React from "react";

import { constructor_menu_config } from "../../../../../../utils/constructor_menu_config";

import {
  ConstructorMenuWrapper,
  ConstructorMenuContainer,
  ConstructorMenuOptionsItem,
  ConstructorMenuOptionsList,
  ConstructorMenuOptionsItemIcon,
  ConstructorMenuOptionsItemTitle,
  ConstructorMenuOptionsItemIconContainer,
} from "./ConstructorMenu.styled";

const ConstructorMenu = ({ selectedItem, setSelectedHandler }) => {
  return (
    <ConstructorMenuWrapper>
      <ConstructorMenuContainer>
        <ConstructorMenuOptionsList>
          {constructor_menu_config.map(({ index, icon, title }) => (
            <ConstructorMenuOptionsItem
              key={index}
              onClick={() => setSelectedHandler(index)}
            >
              <ConstructorMenuOptionsItemIconContainer
                selected={selectedItem === index}
              >
                <ConstructorMenuOptionsItemIcon src={icon} />
              </ConstructorMenuOptionsItemIconContainer>
              <ConstructorMenuOptionsItemTitle>
                {title}
              </ConstructorMenuOptionsItemTitle>
            </ConstructorMenuOptionsItem>
          ))}
        </ConstructorMenuOptionsList>
      </ConstructorMenuContainer>
    </ConstructorMenuWrapper>
  );
};

export default ConstructorMenu;

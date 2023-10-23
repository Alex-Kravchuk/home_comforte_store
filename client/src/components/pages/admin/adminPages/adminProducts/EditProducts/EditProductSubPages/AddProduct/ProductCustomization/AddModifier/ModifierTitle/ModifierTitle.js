import React from 'react';
import { ModifierTitleContainer, ModifierTitleWrapper, TitlePart } from './ModifierTitle.styled';

const ModifierTitle = ({name, displaymethod}) => {
	return (
	  <ModifierTitleWrapper>
		<ModifierTitleContainer>
			<TitlePart>{name}</TitlePart>
			<TitlePart>{displaymethod}</TitlePart>
		</ModifierTitleContainer>
	  </ModifierTitleWrapper>
	)
 }

export default ModifierTitle;
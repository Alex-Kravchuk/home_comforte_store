import React from 'react';
import { DemonstrationContainer, DemonstrationWrapper } from './Demonstration.styled';
import ProductViewer from '../../../../helpers/ProductViewer/ProductViewer';

const Demonstration = () => {
	return (
	  <DemonstrationWrapper>
		<DemonstrationContainer>
			<ProductViewer />
		</DemonstrationContainer>
	  </DemonstrationWrapper>
	)
 }

export default Demonstration;
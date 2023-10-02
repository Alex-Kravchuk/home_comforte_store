import React from 'react';

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { ViewerModeButtonContainer, ViewerModeIcon } from '../Demonstration.styled';

const ViewerToggleButton = ({zoomOn, zoomHandler}) => {
	return (
		<ViewerModeButtonContainer onClick={zoomHandler}>
		<ViewerModeIcon>
		  {zoomOn ? <span>360&deg;</span> : <ZoomInIcon />}
		</ViewerModeIcon>
	  </ViewerModeButtonContainer>
	)
 }

export default ViewerToggleButton;
import React from 'react';
import { SettingsContainer, SettingsWrapper } from './Settings.styled';

const Settings = () => {
	console.log('====================================');
	console.log('render settings');
	console.log('====================================');
	return (
	  <SettingsWrapper>
		<SettingsContainer>Settings page</SettingsContainer>
	  </SettingsWrapper>
	)
 }

export default Settings;
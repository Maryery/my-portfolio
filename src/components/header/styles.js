import styled from '@emotion/styled';
import { Button, Menu } from 'semantic-ui-react';

export const MainMenu = styled(Menu)`
	background-color: #f3f2f0 !important;
	margin-bottom: 0px !important;
`;

export const ButtonContent = styled(Button)`
	font-family: 'Poppins', sans-serif !important;

	@media (max-width: 576px) {
		width: 80px;
		height: 21px;
		font-size: 9px !important;
	}

	
`;

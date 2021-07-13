import styled from '@emotion/styled';
import { Button, Menu } from 'semantic-ui-react';

export const MainMenu = styled(Menu)`
	background-color: #f3f2f0 !important;
	margin-bottom: 0px !important;
	padding-left: 30px;
`;

export const ButtonContent = styled(Button)`
	font-family: 'Poppins', sans-serif !important;

	@media all and (max-width: 416px) {
		width: 80px;
		height: 21px;
		font-size: 12px !important;
		padding: 0px !important;
		margin-left: 20px;
	}
`;

import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';

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

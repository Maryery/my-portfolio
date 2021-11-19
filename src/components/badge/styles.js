import styled from '@emotion/styled';

export const BadgeContainer = styled.div`
	display: inline-grid;
	grid-template-columns: 1fr 1fr;
`;

export const BadgeType = styled.p`
	color: #ffa18e;
	font-size: 15px;

	@media (max-width: 576px) {
		font-size: 10px;
	}

	@media (min-width:576px) and (max-width: 850px) {
		font-size: 11px;
	}
`;

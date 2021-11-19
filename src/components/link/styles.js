import styled from '@emotion/styled';

export const LinkContainer = styled.div`
	position: absolute;
	z-index: auto;
	padding-bottom: 20px;
`;

export const SocialLink = styled.a`
	border: none;
	color: #a5a58d;
	cursor: pointer;
	font-size: 20px;
	float: left;
	margin-right: 15px;
	padding-left: 15px;

	@media (max-width: 376px){
		font-size: 9px;
	}

	@media (min-width: 376px) and (max-width: 576px){
		font-size: 10px;
	}

	@media (min-width: 576px) and (max-width: 768px) {
		font-size: 15px;
	}

	&:hover {
		color: #bb8588;
	}
`;

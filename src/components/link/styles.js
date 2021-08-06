import styled from '@emotion/styled';

export const LinkContainer = styled.div`
	position: absolute;
	z-index: auto;
	padding-bottom: 20px
`;

export const SocialLink = styled.a`
	border: none;
	color: #a5a58d;
	cursor: pointer;
	font-size: 12px;
	float: left;
	margin-right: 15px;
	padding-left: 15px;

	@media all and (max-width: 360px){
		font-size: 10px;
	}

	@media all and (min-width: 768px) {
		font-size: 18px;
	}

	&:hover {
		color: #bb8588;
	}
`;

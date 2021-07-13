import styled from '@emotion/styled';

export const IntroContainer = styled.h1`
	color: #444;
	display: flex;
	font-size: 20px;
	flex-direction: column;
	margin-left: 0px;
	text-align: left;

	@media all and (min-width: 768px) {
		font-size: 50px;
	}
`;
export const Title = styled.span`
	color: #d8a48f;
`;
export const Likes = styled.span`
	color: #bb8588;
`;

export const SocialLink = styled.a`
	border: none;
	color: #a5a58d;
	cursor: pointer;
	font-size: 12px;
	float: left;
	margin-right: 15px;

	@media all and (min-width: 768px) {
		font-size: 18px;
	}

	&:hover {
		color: #bb8588;
	}
`;
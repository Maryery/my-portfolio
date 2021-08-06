import styled from '@emotion/styled';

export const Contact = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media all and (max-width: 360px){
		margin-top: 180px;
	}
	`;

export const ContactHeading = styled.h2`
	font-size: 28px;
	color: #ffa18e;
	padding-left: 15px;
`;

export const ContactText = styled.p`
	padding-left: 15px;
	padding-right: 15px;
	margin-top: 24px;
	width: 100%;
	text-align: justify;

	@media all and (min-width: 768px) {
		width: 70%;
		font-size: 18px;
	}
`;

export const ContactLinkContainer = styled.div`
	padding-bottom: 20px;
`;

export const ContactMailLink = styled.a`
	padding-left: 15px;
	font-size: 15px;
	color: #444;
	&:hover {
		background-color: #ddbea9;
		margin-left: 15px;
		padding-right: 15px;
		transition: 1s ease-in-out;
		color: #444;
	}

	@media all and (min-width: 768px) {
		font-size: 24px;
	}
`;

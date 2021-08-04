import styled from '@emotion/styled';

export const Contact = styled.section`
	display: flex;
	flex-direction: column;
	padding: 30px 0px 60px 0px;	
	margin-left: 50px;
	width: 100%;

	@media all and (min-width: 768px) {
		margin-top 40px;
	}
`;

export const ContactHeading = styled.h2`
	font-size: 28px;
	color: #ffa18e;
	padding-left: 15px;
`;

export const ContactText = styled.p`
	font-size: 18px;
	padding-left: 15px;
	margin-top: 24px;
	width: 70%;
	text-align: justify;
`;

export const ContactLinkContainer = styled.div`
	padding-bottom: 20px;
`;

export const ContactMailLink = styled.a`
	padding-left: 15px;
	font-size: 24px;
	color: #444;
	&:hover {
		background-color: #ddbea9;
		margin-left: 15px;
		padding-right: 15px;
		transition: 1s ease-in-out;
		color: #444;
	}
`;

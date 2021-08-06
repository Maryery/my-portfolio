import styled from '@emotion/styled';

export const AboutMeContainer = styled.section`
	position: relative;
	height: 100vh;
	z-index: -1;
`;

export const SkewedAboutContainer = styled.section`
`;

export const SkewedAbout = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 80%;
	background-color: #d9cec4;
	transform: skewY(6deg);
	transform-origin: top right;

	@media all and (min-width: 768px) {
		height: 90%;
	}
`;

export const AboutMeMainInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	@media all and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
	}
`;

export const AboutMeImgContainer = styled.div`
	height: 300px;
	width: 300px;
	margin-top: 30px;
 margin-right: 20px;
 border-radius: 100%;
 overflow: hidden;

	@media all and (min-width: 768px) {
		height: 400px;
		width: 400px;
		margin-top: 90px;
	}
`;

export const ImageItem = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

export const AboutMeTextContainer = styled.div`
	margin-top: 24px;
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;

	@media all and (min-width: 768px) {
		width: 40%;
		font-size: 16px;
		margin-top: 80px;
		margin-left: 14px;
		margin-right: 10px;
	}
`;

export const TextTitle = styled.h1``;

export const AboutMeParagraph = styled.p`
	margin-top: 30px;
	text-align: justify;
`;

export const AboutMeSkills = styled.div``;

export const TitleSkills = styled.h2``;

export const AboutMeSkillsContainer = styled.div`
	margin-right: 50px;
	font-size: 15px;
	display: flex;
`;

export const AboutMeSkillsList = styled.ul`
	width: 100%;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	padding-left: 0px;
	`;

export const AboutMeSkillsListItem = styled.li`
	margin: 10px 14px 10px 0px;
	padding-left: 0px;
	display: inline-block;
	&:hover {
		color: #bb8588;
	}
`;
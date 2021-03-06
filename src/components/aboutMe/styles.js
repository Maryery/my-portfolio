import styled from '@emotion/styled';

export const AboutMeContainer = styled.section`
	position: relative;
	height: 100vh;
	margin-top: 100px;
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

	@media all and (min-width: 975px) {
		flex-direction: row;
		justify-content: space-around;

	}
`;

export const AboutMeImgContainer = styled.div`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	overflow: hidden;

	@media (min-width: 875px) {
		border-radius: 50%;
		overflow: hidden;
		height: 400px;
		width: 400px;
	}
`;

export const ImageItem = styled.img`
	width: 400px;	
	height: 100%;
	object-fit: cover;
	`;

export const AboutMeTextContainer = styled.div`
	margin-top: 25px;
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	font-size: 14px;

	@media all and (min-width: 975px) {
		width: 65%;
		font-size: 16px;
		margin-top: 80px;
		margin-left: 14px;
		margin-right: 10px;
	}
`;

export const TextTitle = styled.h1``;

export const AboutMeParagraph = styled.p`
	margin-top: 15px;
	text-align: justify;
`;

export const AboutMeSkills = styled.div`
	padding-top: 5px;
`;

export const TitleSkills = styled.h2``;

export const AboutMeSkillsContainer = styled.div`
	margin-right: 50px;
	font-size: 14px;
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
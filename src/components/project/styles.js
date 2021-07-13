import styled from '@emotion/styled/macro';


export const ProjectImageContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 65%;
	transition: 1s ease-in-out;

	@media all and (min-width: 768px) {
		height: 75%;
	}
`;

export const ProjectContainer = styled.article`
	position: sticky;
	height: 280px;
	width: 90%;
	margin: 10px;

	@media all and (min-width: 375px) {
		height: 300px;
		width: 400px;
	}

	@media all and (min-width: 768px) {
		height: 450px;
		width: 500px;
	}

	&:hover ${ProjectImageContainer} {
		height: 0%;
		transition: 1s ease-in-out;
	}
`;

export const ImageItem = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const DescriptionInfo = styled.p`
	color: #424b54;
	margin-bottom: 10px;
	font-size: 12px;
	text-align: justify;

	@media all and (min-width: 768px) {
		font-size: 16px;
	}
`;

export const ProjectInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
	background-color: #dbd3d8;
	bottom: 0;
	padding: 30px;
	z-index: -1;

	&:hover {
		transition: ease-in 0.5s;
		height: 100%;
	}

	&:hover ${DescriptionInfo} {
		display: block;
	}
`;

export const ProjectTitle = styled.h2`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 8px;
	text-align: left;

	@media all and (min-width: 768px) {
		font-size: 20px;
	}
`;

export const ProjectHiddenInfo = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media all and (min-width:768px) {
		justify-content: center;
	}
`;

export const ProjectIcons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

export const LinkItem = styled.a`
	color: black;
	cursor: pointer;
`;

export const ProjectSkills = styled.div`
	display: inline-block;
`;

import styled from '@emotion/styled';

export const Container = styled.div`
	height: 100vh;
	background-color: #f3f2f0;
	padding-top: 120px;
`;

export const IntroContainer = styled.h1`
	background-color: #f3f2f0;	
	color: #444;
	display: flex;
	flex-direction: column;
	margin-left: 0px;
	margin-top: 0px;
	padding-top: 50px
	padding-left: 15px;
	text-align: left;
	padding-left: 15px;
	
	@media (max-width: 576px) {
		font-size: 20px;
	}

	@media (min-width:576px) and (max-width: 850px) {
		font-size: 30px;
	}

	@media (min-width: 850px) {
		font-size: 50px;
		
	}
`;

export const Title = styled.span`
	color: #ffa18e;
`;

export const Likes = styled.span`
	color: #bb8588;
`;

export const Skewed = styled.div`
	top: 100%;
	right: 0;
	left: 0;
	width: 100%;
	height: 70%;
	background-color: #d9cec4;
	margin-top: 150px;
	transform-origin: top left;
	animation-name: initial-animation;
	animation-duration: 2s;
	animation-iteration-count: 1;
 animation-timing-function: ease-in-out;
 transform: skewY(-8deg);

	@keyframes initial-animation {
  from {
    transform: skewY(0deg);
  }
  to {
    transform: skewY(-8deg);
  }
`;
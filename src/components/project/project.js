import React from 'react';
import * as S from './styles';

const Project = ({ title, img, description }) => (
	<S.Project>
		<S.ImageContainer src={img} alt={title}></S.ImageContainer>
		<S.ProjectInfo></S.ProjectInfo>
	</S.Project> 
);

export default Project;

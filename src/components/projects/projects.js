import React from 'react';
import * as S from './styles';
import Project from '../project/project';

const Projects = ({ data }) => {
	return (
		<S.Projects>
			<S.ProjectsHeading>Mis Proyectos</S.ProjectsHeading>
			<S.ProjectsContainer>
				{data.map(
					({ title, description, img }) => (
						<Project 
						title={title} 
						img={img} 
						description={description} 
						/>
					))}
			</S.ProjectsContainer>
		</S.Projects>
	);
};

export default Projects;

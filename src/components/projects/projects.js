import React from 'react';
import * as S from './styles';
import Project from '../project/project';

const Projects = ({ data }) => {
	return (
		<>
			<S.ProjectsHeading>Mis Proyectos</S.ProjectsHeading>
			<S.ProjectsContainer>
				<S.ProjectItem>
					{data.map(({ title, description, img, githubLink, webLink, skills }) => (
						<Project
							title={title}
							img={img}
							description={description}
							githubLink={githubLink}
							webLink={webLink}
							skills={skills}
						/>
					))}
				</S.ProjectItem>
			</S.ProjectsContainer>
		</>
	);
};

export default Projects;

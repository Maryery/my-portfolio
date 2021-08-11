import React from 'react';
import Badge from '../badge/badge';
import * as S from './styles';

const Project = ({ title, img, description, githubLink, webLink, skills }) => (
	<S.ProjectContainer>
		<S.ProjectImageContainer>
			<S.ImageItem src={img} alt={title}></S.ImageItem>
		</S.ProjectImageContainer>
		<S.ProjectInfo>
			<S.ProjectHiddenInfo>
				<S.DescriptionInfo>{description}</S.DescriptionInfo>
				<S.ProjectIcons>
					<S.LinkItem href={githubLink} target="_blank">
						<S.IconItem name="github" size="big" />
					</S.LinkItem>
					{webLink !== null && (
						<S.LinkItem href={webLink} target="_blank">
							<S.IconItem name="computer" size="big" />
						</S.LinkItem>
					)}
				</S.ProjectIcons>
			</S.ProjectHiddenInfo>
			<S.ProjectTitle>{title}</S.ProjectTitle>
			<S.ProjectSkills>
				{skills.map((skill) => (
					<Badge key={skill} title={skill} />
				))}
			</S.ProjectSkills>
		</S.ProjectInfo>
	</S.ProjectContainer>
);

export default Project;

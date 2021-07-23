import React from 'react';
import * as S from './styles';
import fotocv from '../../assets/images/fotocv.jpg';

const AboutMe = () => {
	return (
		<S.AboutMeContainer id="about">
			<S.SkewedAboutContainer>
				<S.SkewedAbout></S.SkewedAbout>
			</S.SkewedAboutContainer>
			<S.AboutMeMainInfo>
				<S.AboutMeImgContainer>
					<S.ImageItem src={fotocv} alt="Beatriz"></S.ImageItem>
				</S.AboutMeImgContainer>
				<S.AboutMeTextContainer>
					<S.TextTitle>¡Hola!</S.TextTitle>
					<S.AboutMeParagraph>
						Mi nombre es <span>Beatriz</span>. Soy ingeniera industrial, con
						años de experiencia en el sector óptico y ahora Full stack web
						student. Decidí volver a mis orígenes de ingeniera y dar un giro de
						180 grados, buscando un reto profesional motivador y dinámico a
						través del bootcamp de desarrollo full stack web de Keepcoding. Soy
						una desarrolladora en progreso, amante de la tecnología y de
						aprender cada día más sobre el mundo digital.
					</S.AboutMeParagraph>
					<S.AboutMeSkills>
						<S.TitleSkills>Skills</S.TitleSkills>
						<S.AboutMeSkillsContainer>
							<S.AboutMeSkillsList>
								<S.AboutMeSkillsListItem>HTML</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>CSS</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>JAVASCRIPT</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>REACT</S.AboutMeSkillsListItem>
							</S.AboutMeSkillsList>
						</S.AboutMeSkillsContainer>
					</S.AboutMeSkills>
				</S.AboutMeTextContainer>
			</S.AboutMeMainInfo>
		</S.AboutMeContainer>
	);
};

export default AboutMe;
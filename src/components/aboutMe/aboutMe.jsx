import React from 'react';
import * as S from './styles';
import fotocv from '../../assets/images/PhotoCvSep21.jpeg';

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
						Mi nombre es <span>Maryery</span>. Soy ingeniera industrial, con
						años de experiencia en el sector retail y ahora Junior Sotfware
						Engineer. Decidí volver a mis orígenes de ingeniera y dar un giro de
						180 grados, buscando un reto profesional motivador y dinámico a
						través del bootcamp de desarrollo full stack web de Keepcoding. Soy
						una desarrolladora en progreso, amante de la tecnología y de
						aprender cada día más sobre el mundo digital.
					</S.AboutMeParagraph>
					<S.AboutMeParagraph>
						Creo firmemente de la importancia de la tecnología para el
						crecimiento y desarrollo de las empresas, ya que ha sido vital para
						la empresas estar digitalizados o poder hacerlo, para poder
						continuar ofreciendo sus productos y servicios. Y yo quiero
						contribuir, a ser parte de esta transformación digital, crecer junto
						a la empresa y ser partícipe de ese éxito, además porque descubrí lo
						mucho que me gusta, también porque siempre he soñado con trabajar en
						el sector IT, construyendo grandes aplicaciones web con mis propias
						manos, confiando en mis capacidades intelectuales, cosa que genera
						una adrenalina en mí, que nunca había experimentado, es muy
						gratificante poder hacer código que se vea reflejado en la web, la
						verdad me hace sentir que estoy realizando una labor destacada, lo
						cual me hace sentir muy bien conmigo misma.
					</S.AboutMeParagraph>
					<S.AboutMeSkills>
						<S.TitleSkills>Skills</S.TitleSkills>
						<S.AboutMeSkillsContainer>
							<S.AboutMeSkillsList>
								<S.AboutMeSkillsListItem>MONGODB</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>EXPRESS</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>REACTJS</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>NODEJS</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>HTML5</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>CSS3</S.AboutMeSkillsListItem>
								<S.AboutMeSkillsListItem>INGLES(B2)</S.AboutMeSkillsListItem>
							</S.AboutMeSkillsList>
						</S.AboutMeSkillsContainer>
					</S.AboutMeSkills>
				</S.AboutMeTextContainer>
			</S.AboutMeMainInfo>
		</S.AboutMeContainer>
	);
};

export default AboutMe;

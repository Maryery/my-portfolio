import React from 'react';
import Link from '../link/link';
import * as S from './styles';

const Contact = () => {
	return (
		<S.Contact id="contact">
			<S.ContactHeading>¿Hablamos?</S.ContactHeading>
			<S.ContactText>
				Estoy siempre abierta a aprender y, además... ¡Buscando mi primera
				oportunidad como Desarrolladora Web Junior! Si crees que mi perfil
				profesional encaja con lo que buscas, quieres darme feedback sobre mis
				proyectos o simplemente quieres charlar, ¡no dudes en contactarme!{' '}
			</S.ContactText>
			<S.ContactLinkContainer>
				<S.ContactMailLink
					href="mailto:maryeryvargas@gmail.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					maryeryvargas@gmail.com
				</S.ContactMailLink>
			</S.ContactLinkContainer>
			<Link />
		</S.Contact>
	);
};

export default Contact;

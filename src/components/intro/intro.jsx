import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import * as S from './styles';
const likes = ['el diseño', 'resolver problemas', 'aprender cosas nuevas'];

const Intro = () => {
	const [likesIndex, setLikesIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setLikesIndex((likesIndex) => (likesIndex === 2 ? 0 : likesIndex + 1));
		}, 2000);
	}, []);

	return (
		<S.Container>
			<S.IntroContainer >
				¡Hola! Soy Maryery, soy
				<S.Title >
					Trainee Software Engineer
				</S.Title>
				Y me gusta
				<S.Likes>{likes[likesIndex]}</S.Likes>
			</S.IntroContainer>
				<S.SocialLink href="CVBeatriz.pdf" download="CVBeatriz">
					<Icon name="file pdf" /> CV
				</S.SocialLink>
				<S.SocialLink
					href="https://www.github.com/Maryery"
					target="_blank"
				>
					<Icon name="github" /> GitHub
				</S.SocialLink>
				<S.SocialLink
					href="https://www.linkedin.com/in/maryeryvargas"
					target="_blank"
				>
					<Icon name="linkedin" /> Linkedin
				</S.SocialLink>
				<S.SocialLink
					href="https://twitter.com/ellabinaria00"
					target="_blank"
				>
					<Icon name="twitter" /> Twitter
				</S.SocialLink>
				<S.Skewed></S.Skewed>
		</S.Container>
	);
};

export default Intro;

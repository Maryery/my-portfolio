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
		<>
			<S.IntroContainer size="huge" color="dark grey">
				¡Hola! Soy Maryery, soy
				<S.Title size="huge" color="pink">
					Junior Front End developer
				</S.Title>
				Y me gusta
				<S.Likes>{likes[likesIndex]}</S.Likes>
			</S.IntroContainer>
			<S.SocialLinkContainer>
				<S.SocialLinkPdf href="CVBeatriz.pdf" download="CVBeatriz">
					<Icon name="file pdf" /> CV
				</S.SocialLinkPdf>
				<S.SocialLinkGithub
					href="https://www.github.com/Maryery"
					target="_blank"
				>
					<Icon name="github" /> GitHub
				</S.SocialLinkGithub>
				<S.SocialLinkLinkedin
					href="https://www.linkedin.com/in/maryeryvargas"
					target="_blank"
				>
					<Icon name="linkedin" /> Linkedin
				</S.SocialLinkLinkedin>
				<S.SocialLinkTwitter
					href="https://twitter.com/ellabinaria00"
					target="_blank"
				>
					<Icon name="twitter" /> Twitter
				</S.SocialLinkTwitter>
			</S.SocialLinkContainer>
		</>
	);
};

export default Intro;

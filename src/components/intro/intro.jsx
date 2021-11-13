import React, { useState, useEffect } from 'react';
import Link from '../link/link';
import * as S from './styles';
const likes = [
	'Proactiva',
	'Autónoma',
	'Persistente',
	'Y muy orientada al logro',
];

const Intro = () => {
	const [likesIndex, setLikesIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setLikesIndex((likesIndex) => (likesIndex === 3 ? 0 : likesIndex + 1));
		}, 3000);
	}, []);

	return (
		<S.Container>
			<S.IntroContainer>
				¡Hola! Mi nombre es Maryery,
				<S.Title>Soy Junior Full Stack Developer</S.Title>me considero una persona
				<S.Likes>{likes[likesIndex]}</S.Likes>
			</S.IntroContainer>
			<Link />
			<S.Skewed></S.Skewed>
		</S.Container>
	);
};

export default Intro;

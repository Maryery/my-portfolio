import React, { useState, useEffect } from 'react';
import Link from '../link/link';
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
			<Link />
				<S.Skewed></S.Skewed>
		</S.Container>
	);
};

export default Intro;

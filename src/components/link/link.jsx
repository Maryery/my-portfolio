import React from 'react';
import { Icon } from 'semantic-ui-react';
import * as S from './styles';
import CVBeatriz from '../../assets/documents/MaryeryVargasCV.pdf'

const Link = () => {
	return (
		<S.LinkContainer>
			<S.SocialLink href={CVBeatriz} download="CVBeatriz">
				<Icon name="file pdf" /> CV Español
			</S.SocialLink>
			<S.SocialLink href="https://www.github.com/Maryery" target="_blank">
				<Icon name="github" /> GitHub
			</S.SocialLink>
			<S.SocialLink
				href="https://www.linkedin.com/in/maryeryvargas"
				target="_blank"
			>
				<Icon name="linkedin" /> Linkedin
			</S.SocialLink>
			<S.SocialLink href="https://twitter.com/ellabinaria00" target="_blank">
				<Icon name="twitter" /> Twitter
			</S.SocialLink>
		</S.LinkContainer>
	);
};

export default Link;

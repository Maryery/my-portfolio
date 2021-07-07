import React from 'react';
import * as S from './styles';

const Badge = ({title}) => {
	return (
		<S.BadgeContainer>
			<S.BadgeType>  {title}</S.BadgeType>
		</S.BadgeContainer>
	)
}

export default Badge;
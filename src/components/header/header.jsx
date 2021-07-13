import React from 'react';
import { Menu } from 'semantic-ui-react';
import * as S from './styles';

const Header = () => (
	<Menu secondary>
		<Menu.Menu position="left">
			<Menu.Item>
				<S.ButtonContent color="light grey">
					Proyectos
				</S.ButtonContent>
			</Menu.Item>
			<Menu.Item>
				<S.ButtonContent color="grey">
					Sobre mi
				</S.ButtonContent>
			</Menu.Item>
			<Menu.Item>
				<S.ButtonContent color="grey">
					Contactos
				</S.ButtonContent>
			</Menu.Item>
		</Menu.Menu>
	</Menu>
);

export default Header;

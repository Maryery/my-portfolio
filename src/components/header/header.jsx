import React from 'react';
import { Menu } from 'semantic-ui-react';
import * as S from './styles';

const Header = () => (
	<S.MainMenu secondary>
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
	</S.MainMenu>
);

export default Header;

import React from 'react';
import { Menu } from 'semantic-ui-react';
import * as S from './styles';

const Header = () => (
	<S.MainMenu secondary>
		<Menu.Menu position="right">
			<Menu.Item>
				<S.ButtonContent as="a" href="#project">
					Proyectos
				</S.ButtonContent>
			</Menu.Item>
			<Menu.Item>
				<S.ButtonContent as="a" href="#about">
					Sobre mi
				</S.ButtonContent>
			</Menu.Item>
			<Menu.Item>
				<S.ButtonContent as="a" href="#contact">
					Contactos
				</S.ButtonContent>
			</Menu.Item>
		</Menu.Menu>
	</S.MainMenu>
);

export default Header;

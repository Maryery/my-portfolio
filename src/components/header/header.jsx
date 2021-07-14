import React from 'react';
import { Menu } from 'semantic-ui-react';
import * as S from './styles';

const Header = () => (
	<S.MainMenu secondary>
		<Menu.Menu position="right">
			<Menu.Item>
				<S.ButtonContent>
					Proyectos
				</S.ButtonContent>
			</Menu.Item>
			<Menu.Item>
				<S.ButtonContent>
					Sobre mi
				</S.ButtonContent>
			</Menu.Item>
			<Menu.Item>
				<S.ButtonContent>
					Contactos
				</S.ButtonContent>
			</Menu.Item>
		</Menu.Menu>
	</S.MainMenu>
);

export default Header;

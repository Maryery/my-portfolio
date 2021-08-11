import hboImg from '../assets/images/hbo.png';
import commingSoon from '../assets/images/comming.jpg';
import pokemonBay from '../assets/images/pokemonBay.png';
import wallaclone from '../assets/images/wallaclone.png';

const PROJECTS_INFO = [
	{
		title: 'Coming Soon!',
		description:
			'Encuentra tu destino de viaje y toda la infomación que debes saber acerca de las restricciones COVID-19.',
		githubLink: '',
		img: commingSoon,
		skills: ['REACT'],
	},
	{
		title: 'Wallaclone',
		description:
		'Es una plataforma que permite la compra y venta de productos de segunda mano, similar a aplicaciones como wallapop, ebay,etc.',
		githubLink: 'https://github.com/Maryery/wallaclone.git',
		img: wallaclone,
		skills: ['MONGO', 'EXPRESS', 'REACT', 'NODE'],
	},
	{
		title: 'Pokémon Bay',
		description:
		'Es una aplicación web, que utiliza LA RESTful API de Pokémon (http://pokeapi.co/), la cual te permite encontrar tu pokemon favorito.',
		githubLink: 'https://github.com/Maryery/pokemon-bay',
		webLink: 'http://pokemon.beatrizvargasmoreno.com',
		img: pokemonBay,
		skills: ['REACT'],
	},
	{
		title: 'HBO',
		description:
		'Es una plataforma de streaming de contenido digital similiar a HBO, para distribuir series y peliculas, solo con HTML5 y CSS, sin el uso de librerías y frameworks externos, entre otros detalles.',
		githubLink: 'https://github.com/Maryery/practica-html-css-github',
		webLink: 'https://maryery.github.io/html-css/index.html',
		img: hboImg,
		skills: ['HTML5', 'CCS3'],
	}
];

export default PROJECTS_INFO;

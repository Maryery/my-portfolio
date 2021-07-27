import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import PROJECTS_INFO from '../src/data/projects';
import AboutMe from './components/aboutMe/aboutMe';
import Contact from './components/contact/contact';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Intro />
				<Projects data={PROJECTS_INFO} />
				<AboutMe />
				<Contact />
			</div>
		</BrowserRouter>
	);
}

export default App;
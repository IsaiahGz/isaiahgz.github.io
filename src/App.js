import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const navChoices = ['About Me', 'Portfolio', 'Contact'];

function App() {
	const [currentPage, setCurrentPage] = useState(navChoices[0]);

	const renderPage = () => {
		switch (currentPage) {
			case 'About Me':
				return <AboutMe />;
			case 'Portfolio':
				return <Portfolio />;
			case 'Contact':
				return <Contact />;
			default:
				return <AboutMe />;
		}
	};

	return (
		<div className='relative min-h-screen bg-slate-200'>
			<Navbar navChoices={navChoices} />
			<Header />
			{/* <div className='pb-8'>{renderPage()}</div> */}
			<AboutMe />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

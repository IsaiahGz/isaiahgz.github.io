import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';

const navChoices = ['About Me', 'Portfolio', 'Contact', 'Resume'];

function App() {
	const [currentPage, setCurrentPage] = useState(navChoices[0]);

	const renderPage = () => {
		switch (currentPage) {
			case 'About Me':
				return <AboutMe />;
			case 'Portfolio':
				return <Portfolio />;
			// case 'Contact':
			// 	return <Contact />;
			// case 'Resume':
			// 	return <Resume />;
			default:
				return <AboutMe />;
		}
	};

	return (
		<div className='bg-slate-200 h-screen'>
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} navChoices={navChoices} />
			{renderPage()}
		</div>
	);
}

export default App;

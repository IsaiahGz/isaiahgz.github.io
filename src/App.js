import { useRef } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	const aboutMeRef = useRef(null);
	const portfolioRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<div className='relative min-h-screen bg-slate-200'>
			<Navbar aboutMeRef={aboutMeRef} portfolioRef={portfolioRef} contactRef={contactRef} />
			<Header />
			<AboutMe scrollRef={aboutMeRef} />
			<Portfolio scrollRef={portfolioRef} />
			<Contact scrollRef={contactRef} />
			<Footer />
		</div>
	);
}

export default App;

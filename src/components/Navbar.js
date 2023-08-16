import Navigation from './Navigation';
import { useEffect, useState } from 'react';

export default function Navbar({ aboutMeRef, portfolioRef, contactRef }) {
	const [percentFade, setPercentFade] = useState(0);
	const handleScroll = () => {
		const position = (window.scrollY / window.visualViewport.height).toFixed(2);
		const rangeChange = (position * 120) / 100;
		setPercentFade(rangeChange);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);
		// On load, run handleScroll once to account for page refreshes
		handleScroll();
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	});
	return (
		<div
			className={`h-14 sm:h-16 md:h-24 fixed top-0 bg-black p-2 z-10 w-full`}
			style={{
				backgroundColor: `rgba(0,0,0,${percentFade})`,
			}}
		>
			<div className=''>
				<h1 className='text-xl sm:text-3xl md:text-5xl p-2 md:p-4 inline-block text-white'>Isaiah</h1>
				<div className='inline-block float-right'>
					<Navigation aboutMeRef={aboutMeRef} portfolioRef={portfolioRef} contactRef={contactRef} />
				</div>
			</div>
		</div>
	);
}

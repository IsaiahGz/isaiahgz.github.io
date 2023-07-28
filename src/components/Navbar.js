import Navigation from './Navigation';
import { useEffect, useState } from 'react';

export default function Navbar({ navChoices }) {
	const [percentFade, setPercentFade] = useState(0);
	const handleScroll = () => {
		const position = (window.scrollY / window.visualViewport.height).toFixed(2);
		const rangeChange = (position * 120) / 100;
		setPercentFade(rangeChange);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
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
					<Navigation navChoices={navChoices} />
				</div>
			</div>
		</div>
	);
}

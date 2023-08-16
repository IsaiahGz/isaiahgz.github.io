export default function Navigation({ aboutMeRef, portfolioRef, contactRef }) {
	const styleText =
		'float-left text-xs sm:text-lg md:text-xl p-1 m-1 md:p-2 md:m-2 text-slate-800 bg-sky-300 hover:bg-sky-400 rounded cursor-pointer';

	const refScroll = (ref, blockAlign = 'center') => {
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: blockAlign,
			inline: 'nearest',
		});
	};
	return (
		<div className='float-right'>
			<ul>
				{/* {navChoices.map((navChoice, idx) => (
					<li
						key={idx}
						className={`float-left text-xs sm:text-lg md:text-xl p-1 m-1 md:p-2 md:m-2 text-slate-800 bg-sky-300 hover:bg-sky-400 rounded cursor-pointer`}
					>
						{navChoice}
					</li>
				))} */}
				<li className={styleText} onClick={() => refScroll(aboutMeRef, 'start')}>
					About Me
				</li>
				<li className={styleText} onClick={() => refScroll(portfolioRef, 'start')}>
					Portfolio
				</li>
				<li className={styleText} onClick={() => refScroll(contactRef)}>
					Contact
				</li>
			</ul>
		</div>
	);
}

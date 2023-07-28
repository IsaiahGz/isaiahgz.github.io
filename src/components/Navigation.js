export default function Navigation({ navChoices }) {
	return (
		<div className='float-right'>
			<ul>
				{navChoices.map((navChoice, idx) => (
					<li
						key={idx}
						className={`float-left text-xs sm:text-lg md:text-xl p-1 m-1 md:p-2 md:m-2 text-slate-800 bg-sky-300 hover:bg-sky-400 rounded cursor-pointer`}
					>
						{navChoice}
					</li>
				))}
			</ul>
		</div>
	);
}

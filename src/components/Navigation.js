export default function Navigation({ currentPage, navChoices, setCurrentPage }) {
	console.log(navChoices);
	return (
		<div className='float-right'>
			<ul>
				{navChoices.map((navChoice) => (
					<li
						onClick={() => {
							setCurrentPage(navChoice);
						}}
						className={`float-left text-sm p-1 m-1 md:text-2xl md:p-2 md:m-2 text-slate-800 ${
							currentPage === navChoice ? 'bg-sky-400' : 'bg-sky-200 hover:bg-sky-300'
						} rounded cursor-pointer`}
					>
						{navChoice}
					</li>
				))}
			</ul>
		</div>
	);
}

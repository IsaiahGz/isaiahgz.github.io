import mountains from '../images/mountains.jpg';
import Navigation from './Navigation';

export default function Header({ currentPage, navChoices, setCurrentPage }) {
	return (
		<div className='h-14 md:h-24'>
			<div className='bg-cover bg-center p-2 blur-sm h-full' style={{ backgroundImage: `url(${mountains})` }} />
			<div className='absolute top-0 left-0 w-full p-2'>
				<h1 style={{ textShadow: '0px 0px 3px white' }} className='text-base p-2 md:p-4 md:text-5xl inline-block text-slate-700'>
					Isaiah
				</h1>
				<Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} navChoices={navChoices} />
			</div>
		</div>
	);
}

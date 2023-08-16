import mountains from '../images/mountains.jpg';

export default function Header() {
	return (
		<div className='h-screen'>
			<div
				className='h-full bg-cover bg-center brightness-50 grid place-items-center'
				style={{ backgroundImage: `url(${mountains})` }}
			>
				<div className='bg-slate-800 rounded p-5'>
					<h2 className='text-4xl text-slate-100'>Hi, I'm Isaiah</h2>
				</div>
			</div>
			{/* <img className='h-full w-full object-cover brightness-50' src={mountains} alt='Mountains' /> */}
		</div>
	);
}

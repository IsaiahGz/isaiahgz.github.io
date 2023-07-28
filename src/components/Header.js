import mountains from '../images/mountains.jpg';

export default function Header() {
	return (
		<div className='h-screen'>
			{/* <div className='bg-cover bg-center p-2 brightness-50 ' style={{ backgroundImage: `url(${mountains})` }} /> */}
			<img className='h-full w-full object-cover brightness-50' src={mountains} alt='Mountains' />
		</div>
	);
}

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className='absolute bottom-0 w-full bg-slate-300 p-4'>
			<div className='mx-auto w-fit flex space-x-2'>
				<a href='https://github.com/IsaiahGz'>
					<FaGithub className='text-black text-5xl' />
				</a>
				<a href='https://www.linkedin.com/in/isaiah-galarza/'>
					<FaLinkedin className='text-black text-5xl' />
				</a>
			</div>
		</footer>
	);
}

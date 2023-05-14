import React from 'react';
import GithubLogo from '../images/github-mark.svg';
import LinkinLogo from '../images/linkedin.svg';

export default function Footer() {
	return (
		<footer className='absolute bottom-0 w-full bg-slate-300 p-4'>
			<div className='mx-auto w-fit flex space-x-2'>
				<a href='https://github.com/IsaiahGz'>
					<img className='h-10' src={GithubLogo} alt='Github logo' />
				</a>
				<a href='https://www.linkedin.com/in/isaiah-galarza/'>
					<img className='h-10' src={LinkinLogo} alt='Linkedin logo' />
				</a>
			</div>
		</footer>
	);
}

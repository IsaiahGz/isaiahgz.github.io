import React from 'react';
import GithubLogo from '../images/github-mark-white.svg';
import GithubDarkLogo from '../images/github-mark.svg';

export default function Project({ title, description, image, deployedLink, githubLink }) {
	let isPhone = false;
	// Check if the user is on a mobile device since you cant hover on mobile
	// From: https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		isPhone = true;
	}
	return (
		<div className='w-full lg:w-1/2 p-1 md:p-4'>
			<div className=' p-2 md:p-4 rounded-lg'>
				<h3>
					<a className='text-sky-700 text-base md:text-2xl' href={deployedLink}>
						{title}
					</a>
				</h3>
				<div className=' my-1 aspect-video bg-cover' style={{ backgroundImage: `url(${image})` }}>
					{!isPhone && (
						<div className='opacity-0 hover:opacity-95 transition w-full h-full p-4 bg-gray-800'>
							<p className='text-gray-100 mb-2'>{description}</p>
							<div className='w-fit'>
								<a href={githubLink}>
									<img className='w-10' src={GithubLogo} alt='GitHub link' />
								</a>
							</div>
						</div>
					)}
				</div>
				{isPhone && (
					<>
						<p>{description}</p>
						<div className='w-fit'>
							<a href={githubLink}>
								<img className='w-10 fill-gray-800' src={GithubDarkLogo} alt='GitHub link' />
							</a>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

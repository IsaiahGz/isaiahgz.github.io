import React from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

export default function Project({ title, description, image, deployedLink, githubLink, alternate = false }) {
	return (
		<div className={`w-full flex flex-wrap ${alternate && 'flex-row-reverse'} my-4`}>
			<div className='w-full xl:w-7/12 flex justify-center items-center'>
				<img src={image} alt='Project screenshot' className=' aspect-video' />
			</div>

			<div className='w-full xl:w-5/12 p-4 bg-primary'>
				<a href={deployedLink} target='_blank' rel='noreferrer' className='block w-fit'>
					<h3 className='text-accent text-2xl inline-block'>{title}</h3>
					<FaArrowUpRightFromSquare className='inline-block text-accent text-2xl align-baseline ml-2' />
				</a>
				<p className='text-background text-base lg:text-lg'>{description}</p>
				<div className='bottom-0 left-0 mt-4'>
					<a href={deployedLink} target='_blank' rel='noreferrer'>
						<FaArrowUpRightFromSquare className='text-secondary inline-block mr-2 text-4xl' />
					</a>
					<a href={githubLink} target='_blank' rel='noreferrer'>
						<FaGithub className='text-secondary inline-block text-4xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

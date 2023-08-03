import React from 'react';
import profilePicture from '../images/profile_pic.jpg';

export default function AboutMe() {
	return (
		<div className='container mx-auto mt-20 p-4'>
			{/* <h2 className='text-5xl text-slate-800'>About Me</h2>
			<div className='mt-4'>
				<img className='w-40 h-40 rounded-full object-cover' src={profilePicture} alt='Profile' />
				<p className='text-lg text-slate-800'>
					My name is Isaiah Galarza and I am a full stack web developer with a passion for learning and problem solving. I am a
					team player and I am always looking for ways to improve myself and my team. I am currently enrolled in the University of
					North Carolina at Charlotte's Full Stack Web Development Bootcamp. I am always looking for opportunities to learn and
					grow as a developer.
				</p>
				<p className='text-lg text-slate-800 mt-2'>
					I am currently learning how to create a full stack web application using the MERN stack. The last project I worked on
					was a full stack web application that allows users to create an account, login, and create blog posts that are stored in
					a database. The application also allows users to view other users' blog posts and comment on them. This application was
					created using handlebars, express, sequelize, and mysql. You can view the application here:{' '}
					<a className='text-cyan-700' href='https://bits-and-bytes.herokuapp.com/'>
						Bits and Bytes
					</a>
					.
				</p>
			</div> */}
			<h2 className='text-5xl text-slate-800 mb-10'>About Me</h2>
			<div className='flex flex-wrap'>
				<div className='w-full lg:w-1/4 mb-10 lg:mb-0 flex flex-col items-center'>
					<img className='w-40 lg:w-52 h-40 lg:h-52 rounded-full object-cover' src={profilePicture} alt='Profile' />
				</div>
				<div className='w-full lg:w-3/4'>
					<p className='text-lg text-slate-800'>
						My name is Isaiah Galarza and I am a full stack web developer with a passion for learning and problem solving. I am
						a team player and I am always looking for ways to improve myself and my team. I have a degree in Computer Science as
						well as a certificate in Full Stack Web Development. I am always looking for opportunities to learn and grow as a
						developer.
					</p>
					<p className='text-lg text-slate-800 mt-4'>
						Most of my experience is with the MERN stack. The last project I worked on,{' '}
						<span className='text-sky-700'>
							<a target='_blank' rel='noopener noreferrer' href='https://github.com/IsaiahGz/dermabed-clinic'>
								DermAbed Clinic
							</a>
						</span>{' '}
						was a MERN application utilizing GraphQL for communicating between the front and back end. The application allows
						users to create an account, login, and create testimonials that are stored in a database. The application also has
						an admin dashboard for testimonial management as well as a shopping cart for purchasing products with Stripe. My
						current goal is to transition this project from MERN stack to utilizing Java Spring Boot along with a microservice
						architecture. Although a work in progress, you can view the GitHub repository for the Java version of the project
						here:{' '}
						<span className='text-sky-700'>
							<a target='_blank' rel='noopener noreferrer' href='https://github.com/IsaiahGz/dermabed-clinic-java'>
								DermAbed Clinic - Java
							</a>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

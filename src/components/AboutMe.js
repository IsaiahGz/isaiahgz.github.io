import React from 'react';
import profilePicture from '../images/profile_pic.jpg';

export default function AboutMe() {
	return (
		<div className='container mx-auto mt-8 p-4'>
			<h2 className='text-2xl text-slate-800'>About Me</h2>
			<div className='mt-4'>
				<img className='w-40 h-40 rounded-full object-cover' src={profilePicture} alt='Profile' />
				<p className='text-lg text-slate-800'>
					My name is Isaiah Galarza and I am a full stack web developer with a passion for learning and problem solving. I am a team player
					and I am always looking for ways to improve myself and my team. I am currently enrolled in the University of North Carolina at
					Charlotte's Full Stack Web Development Bootcamp. I am always looking for opportunities to learn and grow as a developer.
				</p>
				<p className='text-lg text-slate-800 mt-2'>
					I am currently learning how to create a full stack web application using the MERN stack. The last project I worked on was a full
					stack web application that allows users to create an account, login, and create blog posts that are stored in a database. The
					application also allows users to view other users' blog posts and comment on them. This application was created using handlebars,
					express, sequelize, and mysql. You can view the application here:{' '}
					<a className='text-cyan-700' href='https://bits-and-bytes.herokuapp.com/'>
						Bits and Bytes
					</a>
					.
				</p>
			</div>
		</div>
	);
}

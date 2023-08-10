import React from 'react';
import Project from './Project';
import bitsBytesImg from '../images/bits-and-bytes.png';
import mealQuestImg from '../images/mealquest.png';
import dermAbedImg from '../images/darmabed-clinic-screenshot.png';

const projects = [
	{
		title: 'DermAbed Clinic',
		description:
			"A full stack MERN (MongoDB, Express, React, Node) application for a mock dermatologist office. As a user, you're able to share your experience by submitting a testimonial which, when approved by admins, will be displayed on the testimonials page. Users are also able to purchase products regardless of login status from the store page using Stripe. Purchase history is available as a logged in user. Admins are able to manage testimonials and set admin status from the admin dashboard.",
		image: dermAbedImg,
		deployedLink: 'https://dermabed-clinic.herokuapp.com/',
		githubLink: 'https://github.com/IsaiahGz/dermabed-clinic',
	},
	{
		title: 'Bits and Bytes',
		description:
			'A full stack blogging web application designed for developers to share their knowledge and experience. Users are able to create an account, create posts, and comment on posts. Within blogs, users are able to add code snippets by surrounding the code with backticks. When viewing the blog post, the code will have syntax highlighting and logged in users will be able to execute the code to see the output.',
		image: bitsBytesImg,
		deployedLink: 'https://bits-and-bytes.herokuapp.com',
		githubLink: 'https://github.com/IsaiahGz/bits-and-bytes',
	},
	{
		title: 'MealQuest',
		description:
			'A simple front end website written purely in HTML/CSS/JavaScript and jQuery. Queries a food database API to allow users to search for a random food by ingredient. The user is then able to view the recipe and the YouTube API displays the top 5 relevant videos.',
		image: mealQuestImg,
		deployedLink: 'https://mattlombard.github.io/MealQuest/',
		githubLink: 'https://github.com/MattLombard/MealQuest',
	},
];

export default function Portfolio() {
	return (
		<div className='container mx-auto mt-8'>
			<h2 className='text-5xl text-slate-800'>Portfolio</h2>
			<div className='flex flex-wrap mt-2 md:mt-6'>
				{projects.map((project, idx) => (
					<Project key={idx} alternate={idx % 2 === 0} {...project} />
				))}
			</div>
		</div>
	);
}

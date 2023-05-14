import React from 'react';
import Project from '../components/Project';
import bitsBytesImg from '../images/bits-and-bytes.png';
import mealQuestImg from '../images/mealquest.png';

const projects = [
	{
		title: 'Bits and Bytes',
		description: 'A full stack application that allows users to post coding related blogs.',
		image: bitsBytesImg,
		deployedLink: 'https://bits-and-bytes.herokuapp.com',
		githubLink: 'https://github.com/IsaiahGz/bits-and-bytes',
	},
	{
		title: 'MealQuest',
		description: 'A front end application that allows users to search for a random meal given an ingredient.',
		image: mealQuestImg,
		deployedLink: 'https://mattlombard.github.io/MealQuest/',
		githubLink: 'https://github.com/MattLombard/MealQuest',
	},
];

export default function Portfolio() {
	return (
		<div className='container mx-auto mt-8 p-4'>
			<h2 className='text-lg md:text-2xl text-slate-800'>Portfolio</h2>
			<div className='flex flex-wrap mt-2 md:mt-6'>
				{projects.map((project, idx) => (
					<Project key={idx} {...project} />
				))}
			</div>
		</div>
	);
}

import React from 'react';

export default function Resume() {
	return (
		<div className='container mx-auto mt-8 p-4'>
			<h2 className='text-xl md:text-2xl text-slate-800'>Resume</h2>
			<h3 className='text-lg md:text-xl mt-2'>Front-end Proficiencies</h3>
			<ul className='list-disc ml-4'>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>jQuery</li>
				<li>Responsive Design</li>
				<li>React</li>
				<li>TailwindCSS</li>
			</ul>
			<h3 className='text-lg md:text-xl mt-2'>Back-end Proficiencies</h3>
			<ul className='list-disc ml-4'>
				<li>APIs</li>
				<li>Node</li>
				<li>Express</li>
				<li>MySQL, Sequelize</li>
				<li>MongoDB, Mongoose</li>
				<li>REST</li>
				<li>GraphQL</li>
			</ul>
		</div>
	);
}

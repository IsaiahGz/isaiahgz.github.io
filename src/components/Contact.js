export default function Contact({ scrollRef }) {
	return (
		<div ref={scrollRef} className='container mx-auto mt-8 pb-24 p-2'>
			<h2 className='text-5xl text-slate-800 mb-5'>Contact me</h2>
			<p className='text-lg'>
				Feel free to reach out to me using{' '}
				<a className='text-accent' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/isaiah-galarza/'>
					LinkedIn
				</a>
				. I am always open to new opportunities and I would love to hear from you!
			</p>
		</div>
	);
}

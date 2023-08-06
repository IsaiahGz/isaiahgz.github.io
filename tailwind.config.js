/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				text: '#000000',
				background: '#E2E8F0',
				primary: '#132f53',
				secondary: '#c1d7f0',
				accent: '#2b69bb',
			},
		},
	},
	plugins: [],
};

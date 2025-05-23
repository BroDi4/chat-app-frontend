/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: '#242424',
				grayalpha: '#2b2b2b',
				graylight: '#3a3a3a',
				grayultralight: '#abaaaa',
				purple: '#7B48C2',
				purpledark: '#6900b3',
				blue: '#60a5fa',
			},
			gridTemplateColumns: {
				14: 'repeat(14, minmax(0, 1fr))',
				15: 'repeat(15, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
};

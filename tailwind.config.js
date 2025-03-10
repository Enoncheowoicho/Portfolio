 /** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens:{
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily:{
		primary: "var(--font-jetbrainsMono)"
	},
  	extend: {
  		colors: {
			primary: '#1c1c22',
			royalpurple: '#7851a9',
			electricpurple: '#bf00ff',
			lavender:'e6e6fa',
			amethyst: '#9966cc',
			accent: {
				DEFAULT: "#00ff99",
				hover: "003187",

			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
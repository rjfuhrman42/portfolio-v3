import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-modalz-short)'],
        headers: ['var(--font-w95fa)'],
        "heading-tall": ['var(--font-modalz-tall)'],
        body: ['var(--font-pixel-operator)'],
        // body: ['var(--font-fixedsys-excelsior)'],
      },
      colors: {
        "darkest-blue": "#002B36",
        "dark-blue": "#073642",
        "darkest-gray": "#586E75",
        "dark-gray": "#586E75",
        "light-gray": "#839496",
        "lighter-gray": "#93A1A1",
        "tan": "#EEE8D5",
        "light-tan": "#FDF6E3",
        "accent-yellow": "#FFCC33",
        "accent-orange": "#E96B35",
        "accent-red": "#DE423F",
        "accent-pink": "#F91090",
        "accent-purple": "#9465B8",
        "accent-blue": "#53A5DF",
        "accent-teal": "#6CDAD1",
        "accent-green": "#C2E000",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
export default config

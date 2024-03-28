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
        inter: ['var(--font-inter)'],
        fixedsys: ['var(--font-fixedsys-excelsior)'],
      },
      animation: {
        "cycle-color": "cycle 2s ease-in-out infinite",
      },
      keyframes: {
        "cycle": {
          '0%': { color: "var(--accent-green)"},
          '50%': { color: "var(--accent-orange)"},
          '100%': { color: "var(--accent-green)"},
        }
      },
      colors: {
        "darkest-blue": "#002B36",
        "dark-blue": "#073642",
        "medium-blue": "#153b46",
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
        "accent-blue-faded": "RGBA(83, 165, 223, 0.2)",
        "accent-pink-faded": "RGBA(249, 16, 144, 0.2)",
        "accent-yellow-faded": "RGBA(255, 204, 51, 0.2)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '2xl': '42rem',
      },
      screens: {
        'xs': '475px',
        'base-width': '42rem'
      },
    },
  },
  plugins: [],
}
export default config

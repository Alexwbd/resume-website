/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./animelist/**/*.{js,ts,jsx,tsx}"
 
  ],
  theme: {
 borderRadius:{
  'smr': '20px',
  'full': '999px'
 },
 screens: {
  '2xl': {'max': '1535px'},

  'xl': {'max': '1279px'},

  'lg': {'max': '1023px'},

  'md': {'max': '767px'},

  'sm': {'max': '639px'},
},

  
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundColor:{
          'overlay': 'rgba(0, 0, 0, 0.5)',
          'darker': 'rgba(0, 0, 0, 0.315)'
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '10': '10rem',
        '11': '6rem',
        '12': '8rem',
      },
      padding:{
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '20rem',
        '6': '30rem'
      }

    },
  },
  plugins: [],
}

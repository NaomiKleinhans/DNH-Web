/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    screens: {
      sm: '440px',
      md: '710px',
      lg: '970px',
      xl: '1500px0',
    },
    extend: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
      'stone': {
        50:  '#fafaf9',
        500: '#78716c',
        600: '#57534e',
        900: '#1c1917',
      },
      'Lime': {
        400: '#a3e635',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314',
        }
        
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

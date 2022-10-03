/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'bg': '#0F0817ff',
      'clr-1': '#5E46F8',
      'clr-2': '#C03EFE',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'ff-main': ['"Urbanist"', 'lexend']
    },
  },
  plugins: [],
}

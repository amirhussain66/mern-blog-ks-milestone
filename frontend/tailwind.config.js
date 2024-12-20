/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add paths to your project's files
    './node_modules/flowbite/**/*.js', // Include Flowbite files
  ],
  darkMode: 'class', // Enables dark mode using the "dark" class

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), 
  ],}

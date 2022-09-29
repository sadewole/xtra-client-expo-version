/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      poppinsLight: ['PoppinsLight'],
      poppinsMedium: ['PoppinsMedium'],
      poppinsSemiBold: ['PoppinsSemiBold'],
      poppinsBold: ['PoppinsBold'],
    },
    extend: {},
  },
  plugins: [],
};

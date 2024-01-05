/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        blue: {
          dark: "#09041C",
          // lightest: '#FDFDFD'
        },
        gray: {
          light: "#EFF6F0",
        },
      },
      fontFamily: {
        'dm-serif-display': ['DM Serif Display', 'serif'],
         'gasoek-one': ['Gasoek One', 'sans-serif'],
         'train-one': ['Train One', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
};

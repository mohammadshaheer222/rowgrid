/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    fontFamily:{
      signate: ["Signate Grotesk","sans-serif"],
    },
    backgroundColor: {
      primary: "#00040F"
    },
    colors: {
      text: "#B4B4B4"
    }

  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
};

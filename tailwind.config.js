/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Adds Inter as a sans-serif font
        garamond: ["EB Garamond", "serif"], // Adds EB Garamond as a serif font
      },
    },
  },
  plugins: [],
};

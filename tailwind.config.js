/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      },
    },
  },
  plugins: [],
};

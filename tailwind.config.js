/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["Yekan", "sans-serif"],
      },
      colors: {
        primary: "#28a745",
        gray: "#595959",
        gray2: "#00000026",
        gray3: "#00000080",
        gray4:"#0000001F"
      },
      screens:{
        sm445: "600px"
      }
    },
  },
  plugins: [],
};

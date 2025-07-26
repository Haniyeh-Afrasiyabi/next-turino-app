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
        gray4: "#0000001F",
        gray5: "#282828B2",
        gray7: "#7D7D7D",
        gray8: "#444444",
        gray9:"#00000033",
        white1: "#F3F3F3",
        black1 :"#282828",
        complementry: "#009ECA",
        
      },
      screens: {
        sm445: "600px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/background.png')",
        "algiz-black": "url('./assets/algiz_black.png')",
        "angela-black": "url('./assets/angela_black.png')",
        // "bg-and": "url('./assets/and.png')",
      },
    },
  },
  plugins: [],
};

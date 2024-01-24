/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/background.png')",
        // "bg-and": "url('./assets/and.png')",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update the paths according to your project's structure
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { opacity: 0 },
          "10%, 90%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-out": "fade-in-out 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

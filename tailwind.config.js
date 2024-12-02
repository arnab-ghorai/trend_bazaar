module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { opacity: 0 },
          "10%, 90%": { opacity: 1 },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in-out": "fade-in-out 3s ease-in-out forwards",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};

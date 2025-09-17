/** tailwind.config.cjs */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        popx: {
          purple: "#6C00FF",
          lightPurple: "#EBDCFF",
        },
      },
    },
  },
  plugins: [],
};

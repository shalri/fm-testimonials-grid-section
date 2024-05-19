/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "tg-violet": "hsl(263, 55%, 52%)",
        "tg-gray-blue": "hsl(217, 19%, 35%)",
        "tg-dark-blue": "hsl(217, 29%, 14%)",
        "tg-white": "hsl(0, 0%, 100%)",
        // Neutral
        "tg-light-gray": "hsl(0, 0%, 81%)",
        "tg-light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      fontSize: {
        body: "13px",
      },
      fontWeight: {
        normal: 500,
        bold: 600,
      },
      screen: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};

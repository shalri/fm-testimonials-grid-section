/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "tg-red": "hsl(0, 78%, 62%)",
        "tg-cyan": "hsl(180, 62%, 55%)",
        "tg-orange": "(34, 97%, 64%)",
        "tg-blue": "hsl(212, 86%, 64%)",
        // Neutral
        "tg-dark-blue": "hsl(234, 12%, 34%)",
        "tg-grayish-blue": "hsl(229, 6%, 66%)",
        "tg-light-grey": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        body: "15px",
      },
      fontWeight: {
        normal: 200,
        "semi-bold": 400,
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

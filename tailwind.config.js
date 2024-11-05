/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DCDCDC",
        "About-card-bg": "#F5F5F5",
        "neutral-200": "#EAECF0",
        "neutral-50": "#F9FAFB",
        lime: "#F1FFD2",
        "Main-Dark": "#011821",
        secondary: "#6B6969",
        "border-neutral-200": "#E5E5E5",
        "Secondary-Dark": "#090909",
        "Primary-700": "#031B1D",
        "vertical-color": "#D9D9D9",
        "green-vertical-color": "#04684C",
        "list-text": "#676666",
        'black-opacity-06': 'rgba(0, 0, 0, 0.06)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      backgroundColor: {
        background: "rgba(0, 59, 71, 0.80)",
      },
      padding: {
        "btn-p": "6px 16px 6px 12px",
        "green-btn": "24px 32px 24px 24px",
      },

      border: {
        "border-color": "1px solid rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

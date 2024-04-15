/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        navbarColor: "#f1f5f9",
        navbarTextColor: "#020617",
        buttonColor: "#f97316",
        sidebarColor: "#f97316",
      },
    },
  },
  plugins: [],
};

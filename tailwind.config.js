/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnDefault: "#D87D4A",
      },
    },
    container: {
      center: true,
    },
    screens: {
      // Mobile Devices
      sm: "640px",
      // => @media (min-width: 640px)

      // Small Tablets Screens
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px)

      // Tablet Screens
      lg: "1024px",
      // => @media (min-width: 1024px)

      // Small Desktop Screens
      xl: "1280px",
      // => @media (min-width: 1280px)

      // Large Desktop Screens
      "2xl": "1536px",
      // => @media (min-width: 1536px)
    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};

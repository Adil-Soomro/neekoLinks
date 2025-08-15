/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        fontFamily: {
          Roboto: ['Roboto', 'sans-serif'],
          opensans: ['Open sans', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
        },
        pink: {
          DEFAULT: "var(--pink)",
          light: "var(--pink-light)",
        },
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        background: "var(--background)",
        section: "var(--section)",
        
        foreground: "var(--text)",
        card: {
          DEFAULT: "var(--background)",
          foreground: "var(--text)",
        },
        popover: {
          DEFAULT: "var(--background)",
          foreground: "var(--text)",
        },
        secondary: {
          DEFAULT: "var(--section)",
          foreground: "var(--text)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        input: "var(--border)",
        ring: "var(--primary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

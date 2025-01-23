import type { Config } from "tailwindcss";

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
        blue: "#0070C0",
        lightblue: "#CCE2F2",
        gray: "#7F7F7F",
        lightgray: "#F5F5F5",
        lightgray2: "#C7C7C7",
        red: "#DC3644",
        green: "#36DC6D",
      },
    },
  },
  plugins: [],
} satisfies Config;

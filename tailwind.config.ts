import type { Config } from "tailwindcss";

export default {
  darkMode: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   "neue-red": "#C14038",
      // },
    },
  },
  plugins: [],
} satisfies Config;

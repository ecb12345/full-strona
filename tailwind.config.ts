import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#fdf9f2",
        "on-surface": "#1c1c18",
        "on-surface-variant": "#594046",
        "primary": "#9a004a",
        "on-primary": "#ffffff",
        "primary-container": "#c31161",
        "surface-container-low": "#f7f3ec",
        "surface-container-high": "#ebe8e1",
        "outline": "#8d6f76",
        "outline-variant": "#e1bec5",
        "background": "#fdf9f2"
      },
      borderRadius: {
        "DEFAULT": "4px",
        "lg": "8px",
        "xl": "16px",
        "full": "9999px"
      },
      spacing: {
        "xs": "8px",
        "sm": "16px",
        "md": "32px",
        "lg": "64px",
        "xl": "128px",
        "gutter": "24px"
      },
      fontFamily: {
        "headline": ["var(--font-newsreader)", "serif"],
        "body": ["var(--font-manrope)", "sans-serif"]
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: "#D73E1E",
        "terracota-escuro": "#8B2712",
        salmao: "#FFB8A9",
        creme: "#F8F4EC",
        "creme-2": "#EAE5D6",
        grafite: "#1A1816",
        "grafite-suave": "#29261F",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
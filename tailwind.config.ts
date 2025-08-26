import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        kunuSky:"#bae7f8ff",
        kunuSkyLight:"#e4f6fcff",
        kunuPurple:"#CFCEFF",
        kunuPurpleLight:"#F1F0FF",
        kunuYellow:"#f7dd6cff",
        kunuYellowLight:"#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;

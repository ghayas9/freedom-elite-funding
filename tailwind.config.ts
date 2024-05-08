import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAFF00",
        secondary: "#171717",
          customYellow: '#FAFF00',
        // "primary-bg-color": "#14F194",
        // "secondary-bg-color": "#FFE500",
        // "primary-text-color": "#14F194",
        // "secondary-text-color": "#FFE500",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(90.11deg, #FAFF00 0%, #171717 100%)",
        "gradient-2":
          "linear-gradient(0deg, #FAFF00, rgba(0, 0, 0, 0.5))",
        "gradient-3":
          "linear-gradient(#FAFF00, rgb(23, 23, 23))",
          "gradient-4": `linear-gradient(#171717,#171717), linear-gradient(#FAFF00,#fbff005c, transparent)`,
      },
    },
  },
  plugins: [],
};
export default config;

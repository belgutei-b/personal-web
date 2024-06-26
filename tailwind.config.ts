import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

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
      colors: {
        "custom-pink": "#D741E6",
        "custom-green": "#49F191",
        "custom-green-h": "#80f5b2",
        sky: colors.sky,
        fuchsia: colors.fuchsia,
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '700',
              color: theme("colors.gray.50"),
              letterSpacing: theme("letterSpacing.tight"),
            },
            h2: {
              color: theme("colors.gray.50"),
              letterSpacing: theme("letterSpacing.tight"),
            },
            h3: {
              color: theme("colors.gray.50"),
              letterSpacing: theme("letterSpacing.tight"),
            },
            a: {
              color: "#49F191",
            },
            p: {
              letterSpacing: theme("letterSpacing.tight"),
            },
            blockquote: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

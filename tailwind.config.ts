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
      colors: {
        "custom-pink": "#D741E6",
        "custom-green": "#49F191",
        "custom-green-h": "#80f5b2",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "700",
              color: "var(--tw-prose-headings)",
              letterSpacing: "var(--tw-letter-spacing-tight)",
            },
            h2: {
              color: "var(--tw-prose-headings)",
              letterSpacing: "var(--tw-letter-spacing-tight)",
            },
            h3: {
              color: "var(--tw-prose-headings)",
              letterSpacing: "var(--tw-letter-spacing-tight)",
            },
            a: {
              color: "#49F191",
            },
            p: {
              letterSpacing: "var(--tw-letter-spacing-tight)",
            },
            blockquote: {
              color: "var(--tw-prose-quotes)",
            },
            code: {
              color: "var(--tw-prose-code)",
            },
          },
        },
      },
    },
  },
  plugins: [
    // Update to use the new typography plugin for v4
    require("@tailwindcss/typography"),
  ],
};

export default config;

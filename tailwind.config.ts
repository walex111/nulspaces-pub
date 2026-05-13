import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-cormorant)", "ui-serif", "Georgia"],
        mono: ["var(--font-ibm-plex)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        paper: "#FBFBF9",
        ink: "#121212",
        "ink-text": "#1A1A1A",
        "paper-text": "#E5E5E1",
      },
    },
    typography: ({ theme }) => ({
      zinc: {
        css: {
          "--tw-prose-body": theme("colors.ink-text"),
          "--tw-prose-invert-body": theme("colors.paper-text"),
          p: {
            marginTop: "1.5em",
            marginBottom: "1.5em",
            fontSize: "1.125rem", // Consistent 18px reading size
            lineHeight: "1.8", // Uniform leading
          },
          "li p": {
            marginTop: "0",
            marginBottom: "0",
          },
        },
      },
    }),
  },
};

export default config;

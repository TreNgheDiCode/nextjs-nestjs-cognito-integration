import type { Config } from "tailwindcss";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
      MontserratThin: ["MontserratThin"],
      MontserratExtraLight: ["MontserratExtraLight"],
      MontserratLight: ["MontserratLight"],
      MontserratMedium: ["MontserratMedium"],
      MontserratSemiBold: ["MontserratSemiBold"],
      MontserratBold: ["MontserratBold"],
      MontserratExtraBold: ["MontserratExtraBold"],
      Poppins: ["Poppins"],
      PoppinsThin: ["PoppinsThin"],
      PoppinsExtraLight: ["PoppinsExtraLight"],
      PoppinsLight: ["PoppinsLight"],
      PoppinsMedium: ["PoppinsMedium"],
      PoppinsSemiBold: ["PoppinsSemiBold"],
      PoppinsBold: ["PoppinsBold"],
      PoppinsExtraBold: ["PoppinsExtraBold"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
    borderRadius: {
      full: "9999px",
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      ping: {
        "75%, 100%": { transform: "scale(2)", opacity: "0" },
      },
      pulse: {
        "50%": { opacity: ".5" },
        "0&, 100%": { opacity: "1" },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
      fadeIn: "fadeIn 3s ease-out",
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

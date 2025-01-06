import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        grey_400: "#4B4B4B",
        grey_500: "#1E1E1E",
        grey_e4: "#E4E4E4",
        grey_e9: "#E9E9E9",

        white_f0: "#F0F0F0",
        white_f9: "#F9F9F9",

        primary_black: "#030303",
        peach: "rgba(229, 231, 222, 1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        brand: {
          DEFAULT: "var(--brand)",
          foreground: "var(--brand-foreground)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      backgroundImage: {
        pink_gradient: "linear-gradient(to bottom, #F6E9F0 50%, #F4F8F9)",
        pink_section_gradient:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),rgba(232, 225, 231, 1))",
        black_gradient:
          "linear-gradient(126.81deg, #222222 16%, #383838 51.26%, #3C3C3C 85.15%)",
        peach_section_gradient:
          "linear-gradient(to bottom, rgba(229, 239, 233, 1),rgba(229, 231, 222, 0.5),rgba(229, 231, 222, 1))",
        swiper_card_gradient:
          "linear-gradient(45deg, rgba(250, 250, 250, 0.98),rgba(229, 229, 229, 0.54),rgba(203, 203, 203, 0))",
        business_card_gradient:
          "linear-gradient(to bottom, rgba(246, 233, 240, 1),rgba(244, 248, 249, 1))",
      },
      borderRadius: {
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;

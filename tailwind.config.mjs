const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#975CFF',
          100: "#F5F3FF",
          200: "#F2EBFF",
          300: "#CBADFF",
          400: "#975CFF",
          500: "#7D33FF",
          600: "#6529CE",
          700: "#4D1F9D",
          800: "#34146C",
        },
        secondary: {
          100: "#F1FFEE",
          200: "#D0FFC7",
          300: "#A4FF96",
          400: "#3CF328",
          500: "#1BDE09",
          600: "#0D8407",
          700: "#10580F",
          800: "#023102",
        },
        neutral: {
          0: "#FFFFFF",
          100: "#F7F7FB",
          200: "#F2F2F8",
          300: "#DDDEED",
          400: "#AEB1CB",
          500: "#8387AD",
          600: "#636894",
          700: "#404164",
          800: "#171721",
        },
        warning: {
          100: "#FFF8E6",
          200: "#FEE9B1",
          300: "#FEDE8B",
          400: "#FECF55",
          500: "#FDC535",
          600: "#FDB702",
          700: "#E6A702",
        },
        error: {
          100: "#FEEAEA",
          200: "#FDBFBF",
          300: "#FC9F9F",
          400: "#FB7474",
          500: "#FA5959",
          600: "#F92F2F",
          700: "#E32B2B",
        },
        success: {
          100: "#E2F9F1",
          200: "#C3F3E2",
          300: "#3CD9A0",
          400: "#36C390",
          500: "#30AE80",
          600: "#2DA378",
          700: "#248260",
        },
      },
      fontFamily: {
        sans: ["Onest", ...defaultTheme.fontFamily.sans],
        // medium: ["GeneralSans-Medium"],
        // semibold: ["GeneralSans-Semibold"],
      },
    },
  },
  plugins: [],
};

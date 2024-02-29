/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/js/**/*.js"],
  theme: {
    container: {
      screens: {},
    },
    fontFamily: {
      body: ["PT Sans", "sans-serif"],
      display: ["Montserrat", "sans-serif"],
      secondary: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: [
        "0.75rem", // 12px
        {
          lineHeight: "1.3125",
        },
      ],
      sm: [
        "0.875rem", // 14px
        {
          lineHeight: "1.3125",
        },
      ],
      base: [
        "1rem", // 16px
        {
          lineHeight: "1.3125",
        },
      ],
      lg: [
        "1.125rem", // 18px
        {
          lineHeight: "normal",
        },
      ],
      xl: [
        "1.25rem", // 20px
        {
          lineHeight: "normal",
        },
      ],
      "2xl": [
        "1.375rem", // 22px
        {
          lineHeight: "normal",
        },
      ],
      "3xl": [
        "1.5rem", // 24px
        {
          lineHeight: "normal",
        },
      ],
      "4xl": [
        "1.75rem", // 28px
        {
          lineHeight: "normal",
        },
      ],
      "5xl": [
        "1.875rem", // 30px
        {
          lineHeight: "normal",
        },
      ],
      "6xl": [
        "2rem", // 32px
        {
          lineHeight: "normal",
        },
      ],
      "7xl": [
        "2.5rem", // 40px
        {
          lineHeight: "normal",
        },
      ],
    },
    extend: {
      screens: {
        sm: "480px",
        md: "640px",
        lg: "992px",
        "3xl": "1920px",
      },
      // 40 32 30 28 22 20 18 16
      fontSize: {
        "title-1": [
          "2.5rem", // 40px
          {
            fontWeight: "700",
            lineHeight: 1.25,
          },
        ],
        "title-2": [
          "2rem", // 32px
          {
            fontWeight: "700",
            lineHeight: "normal",
          },
        ],
        "title-3": [
          "1.875rem", // 30px
          {
            fontWeight: "700",
            lineHeight: "normal",
          },
        ],
        "title-4": [
          "1.75rem", // 28px
          {
            lineHeight: "normal",
          },
        ],
        "title-5": [
          "1.375rem", // 22px
          {
            lineHeight: "normal",
          },
        ],
      },
      colors: {
        default: {
          500: "#333333",
        },
        primary: {
          500: "#0096D5",
          700: "#1B83B8",
          900: "#045077",
        },
        secondary: {
          500: "#545766",
        },
        tertiary: {
          500: "#A1ACAF",
        },
        muted: {
          100: "#F5F4F2",
          300: "#CCCCCC",
          500: "#848484",
          700: "#575757",
        },
        danger: {
          500: "#F95738",
        },
        border: {
          100: "#F5F4F2",
          300: "#CCCCCC",
          500: "#D9D9D9",
          700: "#848484",
        },
        placeholder: {
          500: "#F5F4F2",
          700: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};

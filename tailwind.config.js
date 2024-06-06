/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "card-gray": "#212936",
        "stroke-gray": "#4D5562",
        "font-gray": "#6C727F",
        "font-white": "#F9FAFB",
        "active-tab": "#4D5562",
        "primary-blue": "#3662E3",
        "secondary-blue": "#7CA9F3",
        "body-black": "#040711",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

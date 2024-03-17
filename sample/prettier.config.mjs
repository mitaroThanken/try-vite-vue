/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
};

export default config;

/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  singleQuote: false,
};

module.exports = config;

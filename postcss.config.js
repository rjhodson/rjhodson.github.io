module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss/nesting'),
    require("tailwindcss")("./_includes/tailwind.config.js"),
    require("autoprefixer"),
  ]
};

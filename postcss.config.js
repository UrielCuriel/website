const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.jsx?",".src/**/*.mdx?"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-scrollbar"),
    require("tailwindcss"),
    require("postcss-nesting"),
    require("autoprefixer"),
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};

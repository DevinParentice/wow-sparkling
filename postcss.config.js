/* eslint-disable */
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        autoprefixer(),
        purgecss({
            content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
        }),
    ],
};

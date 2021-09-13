/* eslint-disable */
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const stylelint = require("stylelint");

module.exports = {
    plugins: [
        stylelint(),
        autoprefixer(),
        purgecss({
            content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
        }),
    ],
};

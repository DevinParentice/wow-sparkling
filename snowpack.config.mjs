/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: "/", static: true },
        src: { url: "/dist" },
    },
    plugins: [
        "@snowpack/plugin-react-refresh",
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-sass",
        "@snowpack/plugin-postcss",
        [
            "@snowpack/plugin-webpack",
            {
                htmlMinifierOptions: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                },
            },
        ],
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        // bundle: true,
        // minify: true,
        // splitting: true,
        // treeshake: true,
        // target: "es2018",
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        port: 3000,
        open: "none",
    },
    buildOptions: {
        /* ... */
    },
};

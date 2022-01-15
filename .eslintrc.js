module.exports = {
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        node: true,
        commonjs: true,
        browser: true,
        es6: true,
    },
    globals: {
        __SNOWPACK_ENV__: true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended",
        "plugin:security/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["react", "prettier", "simple-import-sort", "unicorn"],
    rules: {
        "import/no-named-as-default": "off",
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        "no-console": "error",
        "react/react-in-jsx-scope": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unicorn/filename-case": "off",
        "unicorn/prefer-module": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "unicorn/no-null": "off",
        "unicorn/no-abusive-eslint-disable": "off",
    },
};

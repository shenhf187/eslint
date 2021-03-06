module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["html", "json"],
    rules: {
        "no-var": "warn",
    },
};

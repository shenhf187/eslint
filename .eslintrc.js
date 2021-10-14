export default {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["html"],
    rules: {
        "no-var": "warn",
    },
};

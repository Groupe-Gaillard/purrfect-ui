module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["import", "react", "react-hooks"],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    process: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-return-await": "error",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "import/order": [
      1,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "react/jsx-fragments": ["error", "syntax"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

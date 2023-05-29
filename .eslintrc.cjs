module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "plugin:import/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended"
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["prettier"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow-callback": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "no-underscore-dangle": [
      "error",
      { allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "comma-dangle": ["error", "never"],
    "prettier/prettier": "error"
  }
};

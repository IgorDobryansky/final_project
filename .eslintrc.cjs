module.exports = {
  env: { browser: true, es2020: true },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    "arrow-body-style": ["error", "as-needed"],
    "linebreak-style": 0,
    "comma-dangle": ["error", "never"],
    "operator-linebreak": ["error", "after"],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true
      }
    ]
  }
};

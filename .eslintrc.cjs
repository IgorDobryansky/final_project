module.exports = {
  env: { browser: true, es2020: true },
  extends: ["prettier", "airbnb", "airbnb/hooks"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    "arrow-body-style": ["error", "as-needed"],
    "linebreak-style": ["error", "unix"],
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

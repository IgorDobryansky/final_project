module.exports = {
  env: { browser: true, es2020: true },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [],
  rules: {
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

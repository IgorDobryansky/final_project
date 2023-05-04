module.exports = {
  env: { browser: true, es2020: true },
  extends: ['airbnb-base/legacy'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn'
  }
};

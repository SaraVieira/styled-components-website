module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier'],
  plugins: ['prettier', 'react', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5'
      }
    ]
  }
};

module.exports = {
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/no-unescaped-entities': 0,
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/member-delimiter-style': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
  },
};

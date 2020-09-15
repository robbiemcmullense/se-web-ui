module.exports = {
  rules: {},
  extends: [
    '../../.eslintrc',
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    'prettier',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};

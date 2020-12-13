module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  rules: {
    eqeqeq: 'off',
    'no-unused-vars': 'off',
    'prefer-destructuring': 'off',
    'no-prototype-builtins': 'off',
    'global-require': 'off', // sometimes requires depend on method data
    'import/prefer-default-export': 'off', // not recommended
    'new-cap': 'off', // because of ts-mxgraph classes
    'class-methods-use-this': 'off', // because of inheritance false positives
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
};

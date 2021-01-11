/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwind/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'jsx-a11y'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',

    // NextJS doesn't require react in scope
    'react/react-in-jsx-scope': 'off',

    /**
     * NextJS <Link> API conflicts with a11y expectations
     * https://github.com/zeit/next.js/issues/5533
     * https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402
     **/
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    // Un-opinionate airbnb a bit
    'arrow-body-style': 'off',
  },
  globals: {
    React: 'writable',
  },
  // TODO: doesn't want to play nice with ts parser
  ignorePatterns: ['.eslintrc.js'],
  // TODO
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        // https://github.com/yannickcr/eslint-plugin-react/issues/2353
        'react/prop-types': 'off',
      },
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: { sourceType: 'script' },
      env: { node: true },
    },
  ],
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 0,
    semi: ['error', 'never'],
    'max-len': ['error', { code: 100 }],
    eqeqeq: ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-unused-expressions': [
      'warn',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'no-unused-labels': ['error'],
    'no-dupe-else-if': ['error'],
    'no-else-return': ['error'],
    'no-lonely-if': ['error'],
    'no-duplicate-case': ['error'],
    'no-trailing-spaces': ['error'],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-in-parens': ['error', 'always'],
    'semi-spacing': ['error', { before: true, after: true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: false }],
    // '@typescript-eslint/no-empty-function': ['error', { 'allow': ["public-constructors"] }]
  }
}
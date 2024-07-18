module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:chai-friendly/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    'react',
    'react-refresh',
  ],
  rules: {
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "useTabs": false,
        "semi": false,
        "tabWidth": 4,
        "printWidth": 160,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true,
        "bracketSameLine": false,
        "arrowParens": "avoid",
        "endOfLine": "auto"
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    "react/self-closing-comp": "error",
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    "axios": true,
    "route": true
  }
}

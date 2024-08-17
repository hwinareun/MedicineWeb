module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'build'],
  extends: [
    'eslint:recommended', // ESLint 권장 규칙을 사용
    'plugin:@typescript-eslint/recommended', // @typescript-eslint 권장 규칙 사용
    'plugin:react-hooks/recommended', // react-hooks 권장 규칙 사
    'plugin:react/recommended', // React 권장 규칙 사용
    'prettier', // Prettier 규칙을 ESLint 규칙으로 추가
    'plugin:prettier/recommended', // Prettier와 ESLint 통합
    'plugin:react/jsx-runtime', // plugin:react/recommneded에서 import React from 'react';가 필요 없도록 설정
  ],
  parser: '@typescript-eslint/parser', // TypeScript 파서를 사용
  parserOptions: {
    ecmaVersion: 2020, // 최신 ECMAScript 기능 사용
    sourceType: 'module', // ES 모듈 사용
    ecmaFeatures: {
      jsx: true, // JSX 사용
    },
  },
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전을 자동으로 감지
    },
  },
  rules: {
    'react-refresh/only-export-components': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Prettier 규칙을 ESLint 오류로 표시
    'react/prop-types': 'off', // TypeScript를 사용하므로 prop-types가 필요 없음
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수의 반환 타입을 명시적으로 지정하지 않아도 됨
  },
};

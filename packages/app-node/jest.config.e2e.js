'use strict';

module.exports = {
  roots: ['<rootDir>/tests/e2e'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testEnvironment: 'node', // E2Eテストでクロスオリジンエラーが起きないようにする
  testSequencer: '<rootDir>/tests/e2e/jest.sequencer.js',
  globalSetup: '<rootDir>/tests/e2e/setup.ts'
};

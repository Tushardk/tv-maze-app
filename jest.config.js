module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@vue)/)',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/(src/**/*.spec.(ts|tsx|js))',
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/{!(router|stubs|types|translations),}/*.(ts|vue|js)',
  ],
  coverageDirectory: 'tests/coverage',
  reporters: [
    'default',
    [
      '<rootDir>/node_modules/jest-html-reporter',
      { outputPath: '<rootDir>/tests/report/test_report.html' },
    ],
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    'vue-jest': {
      compilerOptions: {
        // custom element are not processed, this means that custom attributes are not loaded,
        // this also prevent test web components from being stubbed explicitly.
        // isCustomElement: (tag) => tag.startsWith('aab-')
      },
    },
  },
  setupFilesAfterEnv: ['<rootDir>/tests/unit/jest.init.ts'],
};

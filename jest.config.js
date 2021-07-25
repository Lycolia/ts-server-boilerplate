module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  roots: ['<rootDir>/src/'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|dist)[/\\\\]'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  silent: false,
};

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src/'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Does not shown console.log
  silent: true,
};

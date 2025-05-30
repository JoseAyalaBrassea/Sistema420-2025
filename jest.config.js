module.exports = {
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
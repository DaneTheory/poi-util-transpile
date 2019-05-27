module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(es|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'es', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['**/__tests__/**/*.[ejt]s?(x)', '**/?(*.)+(spec|test).[ejt]s?(x)'],
}

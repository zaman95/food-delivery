module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['src/components/**/*.tsx', 'src/features/**/*.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

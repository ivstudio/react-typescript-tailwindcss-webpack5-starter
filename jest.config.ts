export default {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    watchman: false,
};

export default {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!uuid|etc)"
  ],
  moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$': '<rootDir>/__mocks__/fileMock.cjs',
      },
  testEnvironment: 'jest-environment-jsdom',
  testTimeout: 500,
}
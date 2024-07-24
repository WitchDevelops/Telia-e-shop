module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@repo/ui/(.*)$": "<rootDir>/../ui/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },

  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/__tests__/**", "**/*.test.tsx", "**/*.test.ts"],
      },
    ],
  },
};

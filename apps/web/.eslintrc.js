module.exports = {
  extends: ["@repo/eslint-config/next.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  env: {
    jest: true,
  },
  // rules: {
  //   "import/no-extraneous-dependencies": [
  //     "error",
  //     {
  //       devDependencies: ["**/__tests__/**", "**/*.test.tsx", "**/*.test.ts"],
  //     },
  //   ],
  // },
};

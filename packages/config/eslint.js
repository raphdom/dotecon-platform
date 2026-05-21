/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "no-console": "warn",
    "prefer-const": "error",
  },
};

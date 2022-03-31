const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir });

const customJestConfig = {
  moduleNameMapper: {
    "^ui/(.*)$": "<rootDir>/src/ui/$1",
    "^core/(.*)$": "<rootDir>/src/core/$1",
  },
  verbose: true,
};

module.exports = createJestConfig(customJestConfig);

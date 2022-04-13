const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir });

const customJestConfig = {
  moduleNameMapper: {
    "^ui/(.*)$": "<rootDir>/ui/$1",
    "^core/(.*)$": "<rootDir>/core/$1",
  },
  verbose: true,
};

module.exports = createJestConfig(customJestConfig);

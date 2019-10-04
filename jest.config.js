const { defaults } = require("jest-config");
module.exports = {
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/src/mocks/styleMock.js"
  }
};

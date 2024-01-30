export default {
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  transform: { "\\.[jt]sx?$": ["ts-jest", { useESM: true }] },
  moduleNameMapper: { "(.+)\\.js": "$1" },
  extensionsToTreatAsEsm: [".ts"],
};

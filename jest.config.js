/** @type {import('ts-jest').JestConfigWithTsJest} **/
// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: "node",
    preset: "ts-jest",
    transform: {
        "^.+.tsx?$": ["ts-jest", {}],
    },
};

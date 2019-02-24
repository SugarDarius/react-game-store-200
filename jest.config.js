
/*
*   React Game Store 200 - __tests__ - jest config
*   author: Aurélien Dupays Dexemple
*/

module.exports = {
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json'
        }
    },
    moduleFileExtensions: ['jsx', 'js'],
    testMatch: [
        '**/__tests__/**/*.(jtsx|js)'
    ],
    setupFilesAfterEnv: [ '<rootDir>/config/enzyme-config.js' ],
    moduleNameMapper: {
        '\\.(css|scss|jpg|png|svg|gif)$': '<rootDir>/config/jest-empty-module-config.js'
    },
    testEnvironment: 'jsdom',
    testURL: 'https://sfeir.com',
    verbose: true
};
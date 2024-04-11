import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const { baseUrl, paths } = compilerOptions;

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testMatch: ['**/tests/**/*.spec.ts'],
  testEnvironment: 'node',
  modulePaths: [baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(paths),
  moduleFileExtensions: ['ts', 'js'],
  collectCoverageFrom: [
    './src/**/*.ts',
    '!./src/modules/*.ts',
    '!./src/pipes/*.ts',
    '!./src/models/**/*.ts',
    '!./src/repositories/queries/*.ts',
    '!./src/constants/*.ts',
    '!./src/exceptions/*.ts',
    '!./src/guards/*.ts',
    '!./src/utils/*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/main.ts',
    '<rootDir>/src/app.module.ts',
    '<rootDir>/src/utils/logger.ts',
    '<rootDir>/src/config.ts',
  ],
};

export default jestConfig;

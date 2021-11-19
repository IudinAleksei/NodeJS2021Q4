import { validateNumberOfCliArgs, validateConfig, validateArgDuplication } from './validation.js';

describe('Config validation function test', () => {
  test('C1-R1-A must be valid', () => {
    expect(() => validateConfig('C1-R1-A')).not.toThrow();
  });

  test('C2 must throw error', () => {
    expect(() => validateConfig('C2')).toThrow();
  });

  test('Empty config must throw error', () => {
    expect(() => validateConfig()).toThrow();
  });
});

describe('CLI argument validation functions test', () => {
  test('even number of arguments must be valid', () => {
    expect(() => validateNumberOfCliArgs(['-i', './input.txt'])).not.toThrow();
  });

  test('odd number of arguments must be invalid', () => {
    expect(() => validateNumberOfCliArgs(['-i', './input.txt', '-c'])).toThrow();
  });

  test('should throw error if arguments duplicated', () => {
    expect(() => validateArgDuplication(['-i', './input.txt', '-i'], ['--input', '-i'])).toThrow();
  });
});

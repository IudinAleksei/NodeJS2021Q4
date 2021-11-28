import { parseConfig, shiftStringChars, atbashStringChars } from '../utils.js';
describe('test parseConfig function', () => {
  test(`should doesn't contain divider`, () => {
    const testConfig = 'C1-C0-A';
    const divider = '-';
    expect(parseConfig(testConfig, divider)).not.toContain(divider);
  });

  test(`should return array with 3 elements`, () => {
    const testConfig = 'C1-C0-A';
    const divider = '-';
    expect(parseConfig(testConfig, divider)).toHaveLength(3);
  });
});

describe(`test shiftStringChars func`, () => {
  test('should shift every English letter at string', () => {
    expect(shiftStringChars('abc', 1)).toBe('bcd');
  });

  test('should return non-letter char without changing', () => {
    expect(shiftStringChars('!-[', 3)).toBe('!-[');
  });
});

describe(`test atbashStringChars func`, () => {
  test('should revert every English letter at string', () => {
    expect(atbashStringChars('az')).toBe('za');
  });

  test('should return non-letter char without changing', () => {
    expect(atbashStringChars('!-[')).toBe('!-[');
  });
});

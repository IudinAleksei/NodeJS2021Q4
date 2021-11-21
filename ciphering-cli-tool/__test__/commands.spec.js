import { getKnownArgObj } from '../commands.js';

describe('test getting arguments from cli', () => {
  test('should return correct object with all arguments values', () => {
    process.argv = ['node', 'path', '--config', 'C1-C0-R1-R0-A', '-i', './input.txt', '-o', './output.txt'];

    expect(getKnownArgObj()).toMatchObject({ config: 'C1-C0-R1-R0-A', input: './input.txt', output: './output.txt' });
  });

  test('should return correct object with only config value', () => {
    process.argv = ['node', 'path', '--config', 'C1-C0-R1-R0-A'];

    expect(getKnownArgObj()).toMatchObject({ config: 'C1-C0-R1-R0-A' });
  });
});

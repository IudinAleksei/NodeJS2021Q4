import { execFile } from 'child_process';
import { ERROR_MESSAGES } from './constants';

describe('test cli arguments duplication', () => {
  test('should throw error about --config duplication and exit with code 1', (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C1', '--config C1'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(`${ERROR_MESSAGES.duplicateArgument}--config or -c`);
    });

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test('should throw error about -o duplication and exit with code 1', (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['-o ./output.txt', '-o ./output.txt'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(`${ERROR_MESSAGES.duplicateArgument}--output or -o`);
    });

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test('should throw error about -i duplication and exit with code 1', (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['-i ./input.txt', '-i ./input.txt'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(`${ERROR_MESSAGES.duplicateArgument}--input or -i`);
    });

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });
});

describe('test cli arguments validition', () => {
  test(`should throw error about doesn't pass -c or --config argument`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', [], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(ERROR_MESSAGES.noConfig);
    });

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test(`should throw error about incorrent symbols in argument for --config`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(ERROR_MESSAGES.notValidConfig);
    });

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test(`should exit with 0 code if passes correct sequence of symbols as argument for --config`, (done) => {
    const ciphering_tool = execFile(
      'node my_ciphering_cli',
      ['--config C1-C0-R1-R0-A', '-i ./input.txt', '-o ./output.txt'], // add fs mocks
      { shell: true },
    );

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(0);
      done();
    });
  });

  test(`should throw error if input file doesn't exist or with no read access`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C1', '-i ./i.txt'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(
        `${ERROR_MESSAGES.ENOENT}C:\\RSS_Course\\NodeJS2021Q4\\ciphering-cli-tool\\i.txt, set correct --input argument`, // update matcher
      );
      done();
    });

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test(`should throw error if output file doesn't exist or with no read access`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C1', '-o ./o.txt'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(`${ERROR_MESSAGES.ENOENT}./o.txt, set correct --output argument`); // update matcher
      done();
    });

    ciphering_tool.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });
});

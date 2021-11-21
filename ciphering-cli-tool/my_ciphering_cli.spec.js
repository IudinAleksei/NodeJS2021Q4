import { execFile } from 'child_process';
import { writeFileSync, readFileSync, unlinkSync } from 'fs';

import { ERROR_MESSAGES } from './constants';

describe('test cli arguments duplication', () => {
  test('should throw error about --config duplication and exit with code 1', (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C1', '--config C1'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(`${ERROR_MESSAGES.duplicateArgument}--config or -c`);
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test('should throw error about -o duplication and exit with code 1', (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['-o ./output.txt', '-o ./output.txt'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(`${ERROR_MESSAGES.duplicateArgument}--output or -o`);
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test('should throw error about -i duplication and exit with code 1', (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['-i ./input.txt', '-i ./input.txt'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(`${ERROR_MESSAGES.duplicateArgument}--input or -i`);
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(1);
      done();
    });
  });
});

describe('test cli arguments validition', () => {
  test(`should throw error about doesn't pass -c or --config argument and exit with code 1`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', [], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(ERROR_MESSAGES.noConfig);
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test(`should throw error about incorrent symbols in argument for --config and exit with code 1`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C'], { shell: true });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toBe(ERROR_MESSAGES.notValidConfig);
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test(`should throw error if input file doesn't exist or with no read access and exit with code 1`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C1', '-i ./file_undefined.txt'], {
      shell: true,
    });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toMatch(ERROR_MESSAGES.ENOENT);
      done();
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(1);
      done();
    });
  });

  test(`should throw error if output file doesn't exist or with no read access and exit with code 1`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C1', '-o ./file_undefined.txt'], {
      shell: true,
    });

    ciphering_tool.stderr.on('data', (message) => {
      expect(message.toString()).toMatch(ERROR_MESSAGES.ENOENT);
      done();
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(1);
      done();
    });
  });
});

describe('success scenarios', () => {
  beforeAll(() => {
    writeFileSync('./input_test.txt', 'This is secret. Message about "_" symbol!');
  });

  beforeEach(() => {
    writeFileSync('./output_test.txt', '');
  });

  afterAll(() => {
    unlinkSync('./input_test.txt');
    unlinkSync('./output_test.txt');
  });

  test(`should exit with 0 code if passes correct sequence of symbols as argument for --config`, (done) => {
    const ciphering_tool = execFile('node my_ciphering_cli', ['--config C1-C0-R1-R0-A', '-i ./input_test.txt'], {
      shell: true,
    });

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(0);
      done();
    });
  });

  test(`should encode correct with --config C1-C1-R0-A`, (done) => {
    const outputString = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!';

    const ciphering_tool = execFile(
      'node my_ciphering_cli',
      ['--config C1-C1-R0-A', '-i ./input_test.txt', '-o ./output_test.txt'],
      {
        shell: true,
      },
      (error) => {
        if (error) {
          throw error;
        }
        expect(readFileSync('./output_test.txt').toString()).toBe(outputString);
      },
    );

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(0);
      done();
    });
  });

  test(`should encode correct with --config C1-C0-A-R1-R0-A-R0-R0-C1-A`, (done) => {
    const outputString = 'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!';

    const ciphering_tool = execFile(
      'node my_ciphering_cli',
      ['--config C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i ./input_test.txt', '-o ./output_test.txt'],
      {
        shell: true,
      },
      (error) => {
        if (error) {
          throw error;
        }
        expect(readFileSync('./output_test.txt').toString()).toBe(outputString);
      },
    );

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(0);
      done();
    });
  });

  test(`should encode correct with --config A-A-A-R1-R0-R0-R0-C1-C1-A`, (done) => {
    const outputString = 'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!';

    const ciphering_tool = execFile(
      'node my_ciphering_cli',
      ['--config A-A-A-R1-R0-R0-R0-C1-C1-A', '-i ./input_test.txt', '-o ./output_test.txt'],
      {
        shell: true,
      },
      (error) => {
        if (error) {
          throw error;
        }
        expect(readFileSync('./output_test.txt').toString()).toBe(outputString);
      },
    );

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(0);
      done();
    });
  });

  test(`should encode correct with --config C1-R1-C0-C0-A-R0-R1-R1-A-C1`, (done) => {
    const outputString = 'This is secret. Message about "_" symbol!';

    const ciphering_tool = execFile(
      'node my_ciphering_cli',
      ['--config C1-R1-C0-C0-A-R0-R1-R1-A-C1', '-i ./input_test.txt', '-o ./output_test.txt'],
      {
        shell: true,
      },
      (error) => {
        if (error) {
          throw error;
        }
        expect(readFileSync('./output_test.txt').toString()).toBe(outputString);
      },
    );

    ciphering_tool.on('exit', (code) => {
      expect(code).toBe(0);
      done();
    });
  });
});

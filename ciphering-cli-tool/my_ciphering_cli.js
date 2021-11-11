import { pipeline } from 'stream';
import { getKnownArgObj } from './commands.js';
import { exitWithError } from './errors.js';
import { readStream, writeStream } from './files.js';
import { createCipherStreamsArray } from './crypt.js';

const run = () => {
  try {
    const { input, output, config } = getKnownArgObj();
    pipeline(readStream(input), ...createCipherStreamsArray(config), writeStream(output), (err) => {
      if (err instanceof Error) {
        exitWithError(err);
      }
    });
  } catch (err) {
    exitWithError(err);
  }
};

run();

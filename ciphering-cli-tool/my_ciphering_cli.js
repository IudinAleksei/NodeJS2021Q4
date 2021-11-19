import { pipeline } from 'stream';
import { getKnownArgObj } from './commands.js';
import { exitWithError } from './errors.js';
import { readStream, writeStream } from './files.js';
import { createCipherStreamsArray } from './crypt.js';

console.log(process.argv);

const run = () => {
  const { input, output, config } = getKnownArgObj();
  pipeline(readStream(input), ...createCipherStreamsArray(config), writeStream(output), (err) => {
    if (err) {
      throw err;
    }
  });
};

process.on('uncaughtException', (err) => {
  exitWithError(err);
});

run();

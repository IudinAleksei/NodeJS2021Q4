import { createReadStream, createWriteStream, readFileSync } from 'fs';
import { FLAGS } from './constants.js';
import { FileIOError } from './errors.js';

export const readStream = (filename) => {
  if (filename) {
    const stream = createReadStream(filename, { encoding: 'utf8', flags: 'r+' });

    stream.on('error', (err) => {
      throw new FileIOError(err, FLAGS.input[0]);
    });

    return stream;
  }
  return process.stdin;
};

export const writeStream = (filename) => {
  if (filename) {
    try {
      readFileSync(filename);
    } catch (err) {
      throw new FileIOError(err, FLAGS.output[0]);
    }
    return createWriteStream(filename, { encoding: 'utf8', flags: 'a' });
  }
  return process.stdout;
};

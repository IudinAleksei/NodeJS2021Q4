import { createReadStream, createWriteStream } from 'fs';

export const readStream = (filename) => {
  if (filename) {
    return createReadStream(filename, { encoding: 'utf8', flags: 'r+' });
  }
  return process.stdin;
};

export const writeStream = (filename) => {
  if (filename) {
    return createWriteStream(filename, { encoding: 'utf8', flags: 'a' });
  }
  return process.stdout;
};

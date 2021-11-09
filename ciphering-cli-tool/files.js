import { createReadStream, createWriteStream, readFileSync } from 'fs';
// import { exitWithError } from './errors.js';s

export const readStream = (filename) => {
  if (filename) {
    const stream = createReadStream(filename, { encoding: 'utf8', flags: 'r+' });
    // stream.on('error', (error) => exitWithError(error));
    return stream;
  }
  return process.stdin;
};

export const writeStream = (filename) => {
  if (filename) {
    // try {
    readFileSync(filename);
    // } catch (err) {
    //   exitWithError(err);
    // }

    const stream = createWriteStream(filename, { encoding: 'utf8', flags: 'a' });
    // stream.on('error', (error) => exitWithError(error));
    return stream;
  }
  return process.stdout;
};

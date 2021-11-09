import { createReadStream, createWriteStream } from 'fs';

export const readStream = (filename) => {
  if (filename) {
    const stream = createReadStream(filename, { encoding: 'utf8', flags: 'r+' });
    stream.on('error', (error) => {
      console.log(error.code);
    });
    return stream;
  }
  return process.stdin;
};

export const writeStream = (filename) => {
  if (filename) {
    const beforeStream = createWriteStream(filename, { encoding: 'utf8', flags: 'r+' });
    beforeStream.on('error', (error) => console.error(error.message));
    beforeStream.on('open', () => {});
    beforeStream.end();
    const stream = createWriteStream(filename, { encoding: 'utf8', flags: 'a' });
    stream.on('error', (error) => console.error(error.message));
    return stream;
  }
  return process.stdout;
};

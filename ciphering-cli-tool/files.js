import { createReadStream, createWriteStream } from 'fs';

export const readStream = () => {
  const stream = createReadStream('hello.txt', { encoding: 'utf8', highWaterMark: 1 });
  stream.on('error', (error) => console.error(error.message));
  return stream;
};

export const writeStream = () => {
  const stream = createWriteStream('output.txt', { encoding: 'utf8', flags: 'a' });
  stream.on('error', (error) => console.error(error.message));
  return stream;
};

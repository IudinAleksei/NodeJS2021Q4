import * as fs from 'fs';

export const readStream = () => {
  return fs.createReadStream('hello.txt');
};

export const writeStream = () => {
  return fs.createWriteStream('output.txt');
};

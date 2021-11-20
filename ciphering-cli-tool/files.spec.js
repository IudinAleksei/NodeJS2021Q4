import { ReadStream, WriteStream } from 'fs';
import { readStream, writeStream } from './files.js';

describe('test read stream creation', () => {
  test(`should return stdin if filename doesn't pass`, () => {
    expect(readStream()).toBe(process.stdin);
  });

  test(`should return file ReadStream if filename pass`, () => {
    const stream = readStream('./input.txt');
    expect(stream instanceof ReadStream).toBeTruthy();
  });
});

describe('test write stream creation', () => {
  test(`should return stdin if filename doesn't pass`, () => {
    expect(writeStream()).toBe(process.stdout);
  });

  test(`should return file WriteStream if filename pass`, () => {
    const stream = writeStream('./output.txt');
    expect(stream instanceof WriteStream).toBeTruthy();
  });

  test(`should throw error if file does not exist`, () => {
    expect(() => writeStream('./out.txt')).toThrow();
  });
});

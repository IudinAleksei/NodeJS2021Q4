import { Transform } from 'stream';
import { shiftStringChars, atbashStringChars } from './utils.js';
import { CIPHER_SHIFTS, CONFIG_DIVIDER } from './constants.js';
import { parseConfig } from './utils.js';

const createTransform = (transformFunc) =>
  new Transform({
    transform(chunk, encoding, callback) {
      try {
        callback(null, transformFunc(chunk.toString('utf8')));
      } catch (err) {
        callback(err);
      }
    },
  });

const shiftCipherStreamFactory = (shift) => {
  const transformFunction = (string) => shiftStringChars(string, shift);
  return createTransform(transformFunction);
};

const atbashCipherStreamFactory = () => {
  const transformFunction = (string) => atbashStringChars(string);
  return createTransform(transformFunction);
};

const getCipherStreamByConfig = (config) => {
  if (config === 'A') {
    return atbashCipherStreamFactory();
  }
  return shiftCipherStreamFactory(CIPHER_SHIFTS[config]);
};

export const createCipherStreamsArray = (config) => {
  const configArray = parseConfig(config, CONFIG_DIVIDER);

  return configArray.map((conf) => getCipherStreamByConfig(conf));
};

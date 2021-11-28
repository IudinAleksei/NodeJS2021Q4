import { Transform } from 'stream';
import { shiftStringChars, atbashStringChars } from './utils.js';
import { CIPHER_SHIFTS, CONFIG_DIVIDER } from './constants.js';
import { parseConfig } from './utils.js';

const shiftCipherStreamFactory = (shift) =>
  new Transform({
    transform(chunk, encoding, callback) {
      try {
        callback(null, shiftStringChars(chunk.toString('utf8'), shift));
      } catch (err) {
        callback(err);
      }
    },
  });

const atbashCipherStreamFactory = () =>
  new Transform({
    transform(chunk, encoding, callback) {
      try {
        callback(null, atbashStringChars(chunk.toString('utf8')));
      } catch (err) {
        callback(err);
      }
    },
  });

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

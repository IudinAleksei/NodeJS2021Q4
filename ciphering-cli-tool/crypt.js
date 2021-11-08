import { Transform } from 'stream';
import { shiftUTFChar } from './utils.js';

export class CryptTransform extends Transform {
  constructor(opt = {}) {
    super(opt);
  }

  _transform(chunk, encoding, callback) {
    try {
      const resultString = chunk.toString('utf8');

      callback(null, shiftUTFChar(resultString, -10));
    } catch (err) {
      callback(err);
    }
  }
}

import { Transform } from 'stream';
import { chiperString } from './utils.js';

export const chiperStream = (shift) =>
  new Transform({
    transform(chunk, encoding, callback) {
      try {
        callback(null, chiperString(chunk.toString('utf8'), shift));
      } catch (err) {
        callback(err);
      }
    },
  });

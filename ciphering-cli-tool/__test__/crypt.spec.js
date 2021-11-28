import { Transform } from 'stream';
import { createCipherStreamsArray } from '../crypt.js';

describe('test transform streams creation', () => {
  test('should return array of trasform streams', () => {
    const cipherStreams = createCipherStreamsArray('C1-C0-R1-R0-A').map((stream) => stream instanceof Transform);
    expect(cipherStreams).not.toContain(false);
  });
});

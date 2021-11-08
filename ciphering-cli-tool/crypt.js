import { Transform } from 'stream';

export class CryptTransform extends Transform {
  constructor(opt = {}) {
    super(opt);
    this.on('close', () => {
      console.log('\n------ Transform on close');
    })
      .on('drain', () => {
        console.log('\n------ Transform on drain');
      })
      .on('error', (err) => {
        console.log('\n------ Transform on error', err);
      })
      .on('finish', () => {
        console.log('\n------ Transform on finish');
      })
      .on('end', () => {
        console.log('\n------ Transform on end');
      })
      .on('pipe', () => {
        console.log('\n------ Transform on pipe');
      });
  }

  _transform(chunk, encoding = 'utf8', callback) {
    try {
      const resultString = chunk.toString(encoding).toUpperCase();

      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

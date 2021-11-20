import { FileIOError } from './errors.js';

describe('test custom file errors class', () => {
  test('should FileIOError message be correct', () => {
    const error = {
      message: 'file error message',
      path: 'dir/file.ext',
      code: 'ENOENT',
    };

    const fileError = new FileIOError(error, '--input');

    expect(fileError.customMessage).toBe('FILEIO: file does not exist: dir/file.ext, set correct --input argument');
  });
});

import { stderr, exit } from 'process';
import { ERROR_MESSAGES } from './constants.js';

export class FileIOError extends Error {
  constructor(error, inputOrOutput) {
    super(error.message);
    this.path = error.path;
    this.code = error.code;
    this.IO = inputOrOutput;
  }

  get customMessage() {
    return `${ERROR_MESSAGES[this.code]}${this.path}, set correct ${this.IO} argument`;
  }
}

export const printError = (message) => {
  stderr.write(message);
};

export const exitWithError = (error) => {
  const message = error instanceof FileIOError ? error.customMessage : error.message;
  printError(message);
  exit(1);
};

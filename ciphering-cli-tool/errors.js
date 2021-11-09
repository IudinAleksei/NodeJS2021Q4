import { stderr, exit } from 'process';

export const printError = (error) => {
  stderr.write(error.message);
};

export const exitWithError = (error) => {
  printError(error);
  exit(1);
};

import { FLAGS } from './constants.js';
import { validateNumberOfCliArgs, validateConfig, validateArgDuplication } from './validation.js';

const getCliArgs = () => {
  const [, , ...args] = process.argv;
  return args;
};

const getArgValue = (args, option) => {
  validateArgDuplication(args, option);
  const index = args.findIndex((arg) => option.includes(arg));
  return index === -1 ? null : args[index + 1];
};

export const getKnownArgObj = () => {
  const args = getCliArgs();
  validateNumberOfCliArgs(args);

  const knownArgObj = Object.fromEntries(Object.entries(FLAGS).map(([key, value]) => [key, getArgValue(args, value)]));
  validateConfig(knownArgObj.config);

  return knownArgObj;
};

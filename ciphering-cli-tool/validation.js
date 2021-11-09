import { CHIPERS_KEYS, CONFIG_DIVIDER } from './constants.js';
import { parseConfig } from './utils.js';

export const validateConfig = (config) => {
  if (!config) {
    throw new Error('config required');
  }
  const valid = parseConfig(config, CONFIG_DIVIDER).every((configItem) => CHIPERS_KEYS.includes(configItem));
  if (valid) {
    return;
  }
  throw new Error('invalid config');
};

export const validateNumberOfCliArgs = (args) => {
  if (args.length % 2) {
    throw new Error('incorrect number of arguments');
  }
};

export const validateArgDuplication = (args, option) => {
  const argCount = args.filter((arg) => option.includes(arg)).length;
  if (argCount > 1) {
    throw new Error(`arguments duplication: ${option.join(' or ')} was set more than one time`);
  }
};

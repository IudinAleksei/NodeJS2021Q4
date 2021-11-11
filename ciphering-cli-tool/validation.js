import { CHIPERS_KEYS, CONFIG_DIVIDER, ERROR_MESSAGES } from './constants.js';
import { parseConfig } from './utils.js';

export const validateConfig = (config) => {
  if (!config) {
    throw new Error(ERROR_MESSAGES.noConfig);
  }
  const valid = parseConfig(config, CONFIG_DIVIDER).every((configItem) => CHIPERS_KEYS.includes(configItem));
  if (valid) {
    return;
  }
  throw new Error(ERROR_MESSAGES.notValidConfig);
};

export const validateNumberOfCliArgs = (args) => {
  if (args.length % 2) {
    throw new Error(ERROR_MESSAGES.noPairArgumnent);
  }
};

export const validateArgDuplication = (args, option) => {
  const argCount = args.filter((arg) => option.includes(arg)).length;
  if (argCount > 1) {
    throw new Error(ERROR_MESSAGES.duplicateArgument + option.join(' or '));
  }
};

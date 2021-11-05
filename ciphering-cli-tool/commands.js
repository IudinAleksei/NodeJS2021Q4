import { CONFIG_DIVIDER, CRYPT_KEYS } from './constants.js';

export const getFlags = () => {
  const [, , ...flags] = process.argv;
  return flags;
};

export const getOptionValue = (flags, option) => {
  const index = flags.findIndex((flag) => option.includes(flag));
  return index === -1 ? null : flags[index + 1];
};

export const parseConfig = (configString) => {
  const configArr = configString.split(CONFIG_DIVIDER);
  const filtered = configArr.filter((item) => CRYPT_KEYS.includes(item));
  if (filtered.length !== configArr.length) {
    throw new Error('invalid config');
  }
  return filtered;
};

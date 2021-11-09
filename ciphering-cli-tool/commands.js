import { CONFIG_DIVIDER, CRYPT_KEYS, FLAGS, CRYPT_TABLE } from './constants.js';

const getCliArgs = () => {
  const [, , ...flags] = process.argv;
  return flags;
};

const getArgValue = (flags, option) => {
  const index = flags.findIndex((flag) => option.includes(flag));
  return index === -1 ? null : flags[index + 1];
};

const parseConfig = (configString) => {
  const configArr = configString.split(CONFIG_DIVIDER);
  const filtered = configArr.filter((item) => CRYPT_KEYS.includes(item));
  if (filtered.length !== configArr.length) {
    throw new Error('invalid config');
  }
  return filtered;
};

export const configStringToShiftsArray = (configString) => {
  const configArray = parseConfig(configString);
  return configArray.map((conf) => CRYPT_TABLE[conf]);
};

export const getKnownArgObj = () => {
  const args = getCliArgs();
  return Object.fromEntries(Object.entries(FLAGS).map(([key, value]) => [key, getArgValue(args, value)]));
};

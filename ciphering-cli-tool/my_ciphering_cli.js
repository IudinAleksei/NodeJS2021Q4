import { getFlags, getOptionValue, parseConfig } from './commands.js';
import { CONFIG_FLAG, INPUT_FLAG } from './constants.js';
import { CryptTransform } from './crypt.js';
import { readStream, writeStream } from './files.js';

const read = readStream();
const write = writeStream();
const transform = new CryptTransform();
// const flags = getFlags();
// const config = getOptionValue(flags, CONFIG_FLAG);
// console.log(parseConfig(config));

read.pipe(transform).pipe(write);

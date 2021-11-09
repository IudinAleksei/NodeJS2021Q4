import { pipeline } from 'stream';
import { getKnownArgObj, configStringToShiftsArray } from './commands.js';
import { chiperStream } from './crypt.js';
import { readStream, writeStream } from './files.js';

const { input, output, config } = getKnownArgObj();
const shiftsArray = configStringToShiftsArray(config);

const chiperArray = shiftsArray.map((shift) => chiperStream(shift));

try {
  pipeline(readStream(input), ...chiperArray, writeStream(output), () => {});
} catch (err) {}

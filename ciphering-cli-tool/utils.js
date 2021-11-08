export const buildStream = () => {};

export const shiftUTFChar = (char, shift) => {
  const charCode = char.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    const shiftedCode = (charCode + shift) % 91;
    return String.fromCharCode(shiftedCode);
  }
  if (charCode >= 97 && charCode <= 122) {
    const shiftedCode = ((charCode + shift - 97) % 26) + 97;
    return String.fromCharCode(shiftedCode);
  }
  return char;
};

const shiftLetterCycle = (startTableIndex, AlphabetLength, charIndex) => {
  return charIndex;
};

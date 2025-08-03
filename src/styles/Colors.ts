const white = '#FFFFFF';
const snowGray = '#F7F7F7';
const lightGray = '#CCCCCC';
const ultraGray = '#D6D6D6';
const overlayBlack = '#00000066';
const black = '#000000';
const info = '#1872B3';
const success = '#2E9509';
const warning = '#FECB2F';

const Colors = {
  white,
  overlayBlack,
  snowGray,
  lightGray,
  ultraGray,
  black,
  info,
  success,
  warning,
  get: (value: keyof typeof Colors) => {
    if (Colors[value]) {
      return { color: Colors[value] };
    }
    return null;
  }
};

export default Colors;

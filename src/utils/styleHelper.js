import { Typography } from './Typography';
import Colors from '@styles/Colors'

const TEXT_ALIGNMENTS = ['center', 'left', 'right'];

const FONT_WEIGHTS = ['regular', 'medium', 'semibold', 'bold','light'];

const HEADERS = [
  'h50',
  'h32',
  'h30',
  'h28',
  'h26',
  'h24',
  'h22',
  'h20',
  'h18',
  'h16',
  'h15',
  'h14',
  'h13',
  'h12',
  'h11',
  'h8',
  'h9',
  'h17',
  'h10',
  'h7',
  'h5',
  'h4',
  'h3',
  'h2',
];

let getLastProp = (availables, props) => {
  const keys = Object.keys(props);
  const propsKeys = keys.filter(key => availables.includes(key));
  return propsKeys[propsKeys.length - 1];
};


const StyleHelper = {
  
  extractTypographyValue: props => {
    const lastProp = getLastProp(HEADERS, props);
    return Typography.sizes.get(lastProp);
  },

  extractVariationValue: props => {
    const lastProp = getLastProp(FONT_WEIGHTS, props);
    return Typography.weight.get(lastProp);
  },

  extractTextAlign: props => {
    const lastProp = getLastProp(TEXT_ALIGNMENTS, props);
    return lastProp ? { textAlign: lastProp } : null;
  },

  extractColorValue: props => {
    const colors = Object.keys(Colors);
    const lastProp = getLastProp(colors, props);
    return Colors.get(lastProp);
  },
};

export default StyleHelper;
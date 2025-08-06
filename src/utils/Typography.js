import Colors from '@styles/Colors';
import { verticalScale } from 'react-native-size-matters';

const Font = {
  Garnett: {
    REGULAR : 'Garnett-Medium',
    MEDIUM  : 'Garnett-Medium',
    SEMIBOLD: 'Garnett-Semibold',
    BOLD    : 'Garnett-Bold',
    LIGHT   : 'Garnett-Light',
  }
};

export const Typography = {
  sizes: {
    h50: { fontSize: verticalScale(50) },
    h32: { fontSize: verticalScale(32) },
    h30: { fontSize: verticalScale(30) },
    h28: { fontSize: verticalScale(28) },
    h26: { fontSize: verticalScale(26) },
    h24: { fontSize: verticalScale(24) },
    h22: { fontSize: verticalScale(22) },
    h20: { fontSize: verticalScale(20) },
    h18: { fontSize: verticalScale(18) },
    h17: { fontSize: verticalScale(17) },
    h16: { fontSize: verticalScale(16) },
    h15: { fontSize: verticalScale(15) },
    h14: { fontSize: verticalScale(14) },
    h13: { fontSize: verticalScale(13) },
    h12: { fontSize: verticalScale(12) },
    h11: { fontSize: verticalScale(11) },
    h10: { fontSize: verticalScale(10) },
    h9 : { fontSize: verticalScale(9) },
    h8 : { fontSize: verticalScale(8) },
    h7 : { fontSize: verticalScale(7) },
    h5 : { fontSize: verticalScale(5) },
    h4 : { fontSize: verticalScale(4) },
    h3 : { fontSize: verticalScale(3) },
    h2 : { fontSize: verticalScale(2) },

    get: key => {
      const size = Typography.sizes[key];
      if (size) {
        return {
          ...size,
          fontFamily: Font.Garnett.REGULAR,
          color     : Colors.white
        };
      }
      return null;
    }
  },

  weight: {
    regular: {
      fontFamily: Font.Garnett.REGULAR
    },
    medium: {
      fontFamily: Font.Garnett.MEDIUM
    },
    semibold: {
      fontFamily: Font.Garnett.SEMIBOLD,
      fontWeight: '600'
    },
    bold: {
      fontFamily: Font.Garnett.BOLD
    },
    light: {
      fontFamily: Font.Garnett.light
    },
    get: key => (Typography.weight[key] ? Typography.weight[key] : null)
  },
};

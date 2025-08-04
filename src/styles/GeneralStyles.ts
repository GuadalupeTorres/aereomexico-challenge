import { StyleSheet } from 'react-native';
import Colors from '@styles/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

export const GeneralStyles = StyleSheet.create({
  flexRow:{
    flexDirection: 'row'
  },
  flexColumn:{
    flexDirection: 'column'
  },
  flexRowSB:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  flexGap:{
    gap: scale(15)
  },
})
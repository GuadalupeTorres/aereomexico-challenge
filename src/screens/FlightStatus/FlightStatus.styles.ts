import { StyleSheet } from 'react-native';
import Colors from '@styles/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: Colors.white,
    paddingHorizontal:scale(21)
  },
  containHeader: {
    marginTop: scale(17.43),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCalendar:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10)
  },
  containRoute:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: scale(25),
    marginBottom: scale(18),
  },
  backButton: {
    marginRight: scale(16),
    marginBottom: scale(12),
  },
  icon: {
    width: scale(31),
    height: verticalScale(31),
    resizeMode: 'contain',
  },
  changeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSmall: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(4),
    resizeMode: 'contain',
  },
  changeText: {
    textDecorationLine:'underline'
  },
  divider:{
    width:2,
    height:'60%', 
    backgroundColor: Colors.overlayBlack
  }
});

export default styles;
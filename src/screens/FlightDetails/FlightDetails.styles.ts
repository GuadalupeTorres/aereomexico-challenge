import { StyleSheet } from 'react-native';
import Colors from '@styles/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: Colors.white,
    paddingHorizontal:scale(21)
  },
  containHeader:{
    paddingTop: scale(67),
    paddingLeft: scale(25)
  },
  containBackButton: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: scale(20),
    height: scale(20)
  },
  containDetail: {
    flex:1, 
    backgroundColor: Colors.white,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    position:'relative',
    marginTop: scale(-135)
  },
  card: {
    padding: scale(20),
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent:'space-between'
  },
  arrived: {
    backgroundColor: Colors.black,
    color: Colors.white,
    borderRadius: scale(4),
    paddingVertical: scale(4),
    paddingHorizontal: scale(8),
  },
  divider:{
    width:'100%',
    height:1,
    backgroundColor: Colors.mediumGray
  },
  containdDetail:{
    marginHorizontal:scale(25),
    paddingTop: scale(21),
  },
  containTime: {
    paddingBottom: scale(25),
  },
  infoTerminal: {
    backgroundColor:Colors.snowGray,
    opacity: 1,
    borderRadius: scale(8),
    paddingTop: scale(10),
    paddingRight: scale(15),
    paddingBottom: scale(10),
    paddingLeft: scale(15),
    marginTop: scale(8),
    marginBottom: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(36)
  }
});

export default styles;
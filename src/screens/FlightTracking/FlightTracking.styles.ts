import { StyleSheet } from 'react-native';
import Colors from '@styles/Colors';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  containerHeader: {
    justifyContent: 'center',
    height: scale(200),
    backgroundColor: Colors.snowGray,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1
  },
  formWrapper: {
    marginHorizontal: scale(25),
  },
  inputsRow: {
    flexDirection: 'row',
    gap: scale(15),
  },
  inputLeft: {
    flex: 0.8,
  },
  inputRight: {
    flex: 1,
  },
  searchButtonWrapper: {
    marginTop: scale(15),
  },
  assistanceWrapper: {
    marginTop: scale(30),
    alignItems:'center'
  },
  lineheight: {
    lineHeight: scale(32),
  },
  link: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: Colors.black,
  },
  containerImage: {
    width: '100%',
    height: '80%'
  },
});

export default styles;
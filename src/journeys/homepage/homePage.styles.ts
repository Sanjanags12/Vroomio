import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   // backgroundColor: colors.background12,
     backgroundColor: '#fff',
  },
   scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 8,
    color: '#191970',
    fontFamily: 'DancingScript'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    fontStyle: 'italic',
  },
  inputBox: {
   backgroundColor: colors.background12,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    height: 60,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  calenderBox: {
    backgroundColor: colors.background12,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    height: 60,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 20,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 15,
    color: '#333',
  },
  arrowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  Icon: {
    margin: 10,
  },
});

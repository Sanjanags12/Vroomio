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
    padding: 25,
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: '#191970',
    fontFamily:'Pacifico',
    
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
    alignItems: 'center',
    height: 70,
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
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 70,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 20,
    marginBottom: 10,
    gap:18
  },
  inputText: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 10
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

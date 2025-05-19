import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },

  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#191970',
  },
  subtitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    fontStyle: 'italic',
  },
  cardtitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    fontFamily:'ShadowlightRegular'
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },

  card: {
    backgroundColor: '#FEF3E2',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column',
  },

  subcard: {
    margin: 10,
    backgroundColor: '#FEF3E2',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column',
  },

  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'justify',
  },
  footer: {
    marginTop:20,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    fontFamily:'ArizoniaRegular'
  },
});

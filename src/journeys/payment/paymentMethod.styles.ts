import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
  },

  back1: {
    width: 25,
    height: 25,
    tintColor: 'black',
    marginTop: 30,
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    marginTop: 80,
  },

  subtitle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 24,
  },

  scrollContainer: {
    paddingBottom: 40,
  },

  cardDetailsContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
  },
});

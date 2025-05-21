import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
   scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  picker: {
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderColor: '#ccc',
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 16,
    marginVertical: 12,
    fontWeight: '500',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingBottom:30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    alignSelf: 'flex-start',
   
  },
});

import { StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff', 
    flex:1,
    
  },
  

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    marginTop: 80,
    marginLeft: 20
  },

  subtitle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 24,
  },

  scrollViewContent: {
    padding: 20,
  },

  optionContainer: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    backgroundColor: colors.background12,
    borderColor:colors.highlight
  },

  busCard: {
    backgroundColor: colors.background12,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  ratings: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  bustype: {
    fontSize: 16,
    color: '#555555',
    marginTop: 5,
    fontStyle:'italic'
  },
  
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  
  optionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },

  optionSubtitle: {
    fontSize: 13,
    color: '#6B7280',
  },

  heading: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },

  imageIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  ratingBox: {
    backgroundColor: '#d4edda',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  
  ratingText: {
    color: '#155724',
    fontWeight: 'bold',
    fontSize: 14,
  },
  timing:{
    color: '#155724',
    fontWeight: 'bold',
    fontSize: 14,
  },
  priceText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: '#EF6C00',
    borderRadius: 8,
    padding: 16,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  back1: {
    width: 25,
    height: 25,
    tintColor: 'black',
    marginTop: 30,
    marginBottom: 10,
  },
});

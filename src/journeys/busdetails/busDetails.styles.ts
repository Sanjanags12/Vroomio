import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff', 
    flex:1,
    
  },
  navbar:{
    height:35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:10
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
    marginTop: 40,
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
  content: {
    padding: 20,
  },
  
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
   
  timing: {
    fontSize: 15,
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
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
  
  priceText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  Filtercard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    margin:10
  },
  
  card: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    gap:10
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
    fontSize: 16,
  },

  
  noBusesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  
});

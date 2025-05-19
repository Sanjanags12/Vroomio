import {  StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: '#ffffff', 
        flex:1,
        
      },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#fff',
      height:350,
      padding: 50,
      borderRadius: 12,
      alignItems: 'center',
      elevation: 5,
      marginBottom: 30,
    },
    SuccessImg:{
      height:250
    },
    successText: {
      marginTop: 15,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green',
    },
 
  });
  
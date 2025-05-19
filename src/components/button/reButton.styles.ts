import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        width: '100%',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        height:60
       
      },
      buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
      },
      disabled: {
        backgroundColor: '#B0B0B0'
     }
});


import { StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.background12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
  },
  selected: {
    borderBottomWidth: 2,
    borderColor: colors.primary500,
    borderRadius: 12,
  },

  imgContainer: {
    marginRight: 16,
    
  },

  imageFrame: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text900,
  },
  
  subTitle: {
    fontSize: 13,
    color: colors.text600,
    marginTop: 4,
  },
  dotContainer: {
    marginLeft: 12,
  },
  groupContainer: {
    paddingVertical: 12,
  },
  
});

export default styles;

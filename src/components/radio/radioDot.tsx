
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  selected: boolean;
}

const RadioDot: React.FC<Props> = ({ selected }) => {
  return (
    <View
      style={[
        styles.outerCircle,
        { borderColor: selected ? '#5D5FEE' : '#CCCCCC' }, // dynamic border color
      ]}
    >
      {selected && <View style={styles.innerDot} />}
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5D5FEE',
  },
});

export default RadioDot;

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './radioButton.styles';

import { useRadioGroupContext } from './radioGroup';
import RadioDot from './radioDot';


type RadioProps = {
  value: string;
  subTitle?: string;
  image: React.ReactNode;
  frameColor?: string;
};

const Radio = ({
  value = 'Title',
  subTitle,
  image,
  frameColor,
}: RadioProps): React.ReactElement => {
  const { setValue, value: selectedValue } = useRadioGroupContext();

  return (
    <TouchableOpacity
      style={[styles.root, selectedValue === value && styles.selected]}
      onPress={() => setValue((prev) => (prev === value ? undefined : value))}
    >
      <View style={styles.imgContainer}>
        <View style={[styles.imageFrame, { backgroundColor: frameColor }]}>
          {image}
        </View>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.title}>{value}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      <View style={styles.dotContainer}>
        <RadioDot selected={selectedValue === value} />
      </View>
    </TouchableOpacity>
  );
};

export default Radio;

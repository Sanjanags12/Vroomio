import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import SuccessIcon from '../../components/svgs/successIcon';
import styles from '../successpage/success.style';
import ReusableButton from '../../components/button/reButton';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import { useTranslation } from 'react-i18next';

type BusDescriptionRouteProp = RouteProp<RootStackParamList, 'Success'>;
const SuccessScreen = ({
  navigation,
}: {
  navigation: {navigate: (screen: string, params?: any) => void};
}): React.JSX.Element => {
  const route = useRoute<BusDescriptionRouteProp>();
  const {traveller, type, ratings, seats, timing, price} = route.params;
  const { t } = useTranslation();
  const handleClose = () => {
    navigation.navigate('Home', {
      traveller,
      type,
      ratings,
      seats,
      timing,
      price,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.card}>
          <View style={styles.SuccessImg}>
            <SuccessIcon width={20} height={20} />
          </View>

          <Text style={styles.successText}>Booked Successfully</Text>
        </View>

        <ReusableButton
          title={t('close')}
          onPress={handleClose}
          style={{width: 250}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;

import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ReusableButton from '../../components/button/reButton';
import BackArrow from '../../components/svgs/backArrow';
import styles from '../busdescription/busDesc.style';
import { useTranslation } from 'react-i18next';

// Define the route prop type for BusDescription screen
type BusDescriptionRouteProp = RouteProp<RootStackParamList, 'BusDescription'>;

const BusDescriptionScreen = ({
  navigation,
}: {
  navigation: { navigate: (screen: string, params?: any) => void };
}) => {
 
  const route = useRoute<BusDescriptionRouteProp>();
  const { t } = useTranslation();
  const { traveller, type, ratings, seats, timing, price, from, to } = route.params;

  const handleBook = () => {
    navigation.navigate('BookingForm', {
      price,
      from,
      to,
      traveller,
      type,
      ratings,
      seats,
      timing,
    });
  };

  const handleBackPress = () => {
    navigation.navigate('BusDetails', { from, to });
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <BackArrow width={24} height={24} />
      </TouchableOpacity>

    
      <Text style={styles.pageTitle}>{t('bus_details')}</Text>
      <Text style={styles.route}>
        {from} ➝ {to}
      </Text>

      <View style={styles.card}>
        {/* Bus Details */}
        <Text style={styles.busTitle}>{traveller}</Text>
        <Text style={styles.label}>
          Type: <Text style={styles.value}>{type}</Text>
        </Text>
        <Text style={styles.label}>
          Seats Available: <Text style={styles.value}>{seats}</Text>
        </Text>
        <Text style={styles.label}>
          Timing: <Text style={styles.value}>{timing}</Text>
        </Text>
        <Text style={styles.label}>
          Price: <Text style={styles.price}>₹ {price}</Text>
        </Text>

        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>⭐ {ratings}</Text>
        </View>

        <ReusableButton title={t('book_now')} onPress={handleBook} />
      </View>
    </SafeAreaView>
  );
};

export default BusDescriptionScreen;

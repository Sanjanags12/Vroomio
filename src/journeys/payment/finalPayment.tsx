import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import ReusableButton from '../../components/button/reButton';
import { useBooking } from '../../common/contexts/bookingContext';
import styles from '../payment/finalpayment.styles';
import { useTranslation } from 'react-i18next';
import { usePostBusBooking, BookingRequest, BookingResponse } from '../../services/postBusBookingDetails';

type Props = NativeStackScreenProps<RootStackParamList, 'Payment'>;

const PaymentScreen: React.FC<Props> = ({ route, navigation }) => {
  const {
    price,
    from,
    to,
    traveller,
    type,
    ratings,
    seats,
    timing,
    email,
    mobile,
    pickup,
    drop,
    seat,
  } = route.params;

  const { addBooking } = useBooking();
  const { t } = useTranslation();

  const { mutate: postBooking, isError, error } = usePostBusBooking();

  const handleConfirmPayment = () => {
    const bookedBus: BookingRequest = {
      traveller,
      type,
      ratings,
      seats,
      timing,
      price,
      email,
      mobile,
      pickup,
      drop,
      seat,
      from,
      to,
      id: Date.now(), 
    };

    postBooking(bookedBus, {
      onSuccess: (data: BookingResponse) => {
       
        const bookingWithId = {
          ...data,
           id: Date.now(), 
        };

        addBooking(bookingWithId);

        navigation.navigate('Success', {
          price,
          from,
          to,
          traveller,
          type,
          ratings,
          seats,
          timing,
        });
      },
      onError: (error) => {
        console.error('Booking failed:', error.message);
      },
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <View style={styles.summary}>
        <Text style={styles.label}>Traveller: {traveller}</Text>
        <Text style={styles.label}>Bus Type: {type}</Text>
        <Text style={styles.label}>Seats Available: {seats}</Text>
        <Text style={styles.label}>Timing: {timing}</Text>
        <Text style={styles.label}>Price: ₹{price}</Text>
        <Text style={styles.label}>Rating: ⭐{ratings}</Text>
        <Text style={styles.label}>From: {from}</Text>
        <Text style={styles.label}>To: {to}</Text>
        <Text style={styles.label}>Pickup: {pickup}</Text>
        <Text style={styles.label}>Drop: {drop}</Text>
        <Text style={styles.label}>Seat: {seat}</Text>
        <Text style={styles.label}>Email: {email}</Text>
        <Text style={styles.label}>Mobile: {mobile}</Text>
      </View>
      <ReusableButton title={t('confirm')} onPress={handleConfirmPayment} />
      <ReusableButton title={t('go_back')} onPress={handleBackPress} />
    </SafeAreaView>
  );
};

export default PaymentScreen;

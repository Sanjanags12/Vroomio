import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './paymentMethod.styles';
import RadioGroup from '../../components/radio/radioGroup';
import Radio from '../../components/radio/radioButton';
import { colors } from '../../common/constants/colors';
import PhonepeIcon from '../../components/svgs/phonepeIcon';
import GooglePayIcon from '../../components/svgs/googlePayIcon';
import PaytmIcon from '../../components/svgs/paytmIcon';
import CardIcon from '../../components/svgs/cardIcon';
import ReusableButton from '../../components/button/reButton';
import { useTranslation } from 'react-i18next';

type PaymentMethodScreenProps = {
  navigation: { navigate: (screen: string, params?: any) => void };
  route: {
    params: {
      price: string;
      traveller: string;
      type: string;
      ratings: string;
      seats: string;
      timing: string;
      from: string;
      to: string;
    };
  };
};

const PaymentMethodScreen: React.FC<PaymentMethodScreenProps> = ({ navigation, route }) => {
  const { price, ...userData } = route.params;
  const [selectedMethod, setSelectedMethod] = useState<string | undefined>(undefined);
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const { t } = useTranslation();
  const handleContinue = () => {
    if (!selectedMethod) {
      Alert.alert('Missing Information', 'Please select a payment method');
      return;
    }

    if (selectedMethod === 'Card') {
      if (!cardNumber || !expiryDate || !cvv) {
        Alert.alert('Missing Card Details', 'Please fill in all the card details');
        return;
      }
    }

    navigation.navigate('Payment', {
      ...userData,
      price,
      method: selectedMethod,
      cardDetails: selectedMethod === 'Card' ? { cardNumber, expiryDate, cvv } : null,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>{t('choose_payment_method')}</Text>
          <Text style={styles.subtitle}>{t('select_payment_instruction')} ₹{price}</Text>

          <RadioGroup onChange={setSelectedMethod}>
            <Radio 
              value="PhonePe"
              subTitle="Pay securely via PhonePe"
              image={<PhonepeIcon width={40} height={40} />}
              frameColor={colors.white}
             
            />
            <Radio
              value="Google Pay"
              subTitle="Use your Google Pay account"
              image={<GooglePayIcon width={50} height={50} />}
              frameColor={colors.yellow200}
            />
            <Radio
              value="Paytm"
              subTitle="Pay using Paytm wallet"
              image={<PaytmIcon width={50} height={50} />}
              frameColor={colors.pink100}
            />
            <Radio
              value="Card"
              subTitle="Use debit/credit card"
              image={<CardIcon width={50} height={50} />}
              frameColor="green"
            />
          </RadioGroup>

          {selectedMethod === 'Card' && (
            <View style={styles.cardDetailsContainer}>
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="Expiry Date (MM/YY)"
                keyboardType="numeric"
                value={expiryDate}
                onChangeText={setExpiryDate}
              />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
                secureTextEntry
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
          )}

          <ReusableButton title={t('pay')} onPress={handleContinue} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

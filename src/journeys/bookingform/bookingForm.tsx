import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
 
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import ReusableButton from '../../components/button/reButton';
import styles from '../bookingform/bookingForm.style';
import { useTranslation } from 'react-i18next';

type Props = NativeStackScreenProps<RootStackParamList, 'BookingForm'>;

const BookingFormScreen: React.FC<Props> = ({ navigation, route }) => {
  const { price, from, to, traveller, type, ratings, seats, timing } = route.params;
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    pickup: '',
    drop: '',
    seat: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = () => {
    const { email, mobile, pickup, drop, seat } = formData;

    if (!email || !mobile || !pickup || !drop || !seat) {
      Alert.alert(t('missing'));
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert(t('invalid_email'));
      return;
    }

    navigation.navigate('PaymentMethod', {
      ...formData,
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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('form')}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={text => handleInputChange('email', text)}
        value={formData.email}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        onChangeText={text => handleInputChange('mobile', text)}
        value={formData.mobile}
      />

      <Text style={styles.label}>{t('pickup_address')}</Text>
      <Picker
        selectedValue={formData.pickup}
        onValueChange={value => handleInputChange('pickup', value)}
        style={styles.picker}
      >
        <Picker.Item label="Select Pickup Location" value="" />
        <Picker.Item label="silk board" value="silk board" />
        <Picker.Item label="domlur" value="domlur" />
        <Picker.Item label="majestic" value="majestic" />
        <Picker.Item label="Yashwantpura" value="Yashwantpura" />
        <Picker.Item label="jalahalli" value="jalahalli" />
      </Picker>

      <Text style={styles.label}>{t('drop_address')}</Text>
      <Picker
        selectedValue={formData.drop}
        onValueChange={value => handleInputChange('drop', value)}
        style={styles.picker}
      >
        <Picker.Item label="Select Drop Location" value="" />
        <Picker.Item label="Shivamogga" value="shivamogga" />
        <Picker.Item label="Sagar" value="sagar" />
        <Picker.Item label="Gerusoppa" value="gerusoppa" />
        <Picker.Item label="Honnavar bus stand" value="honnavar bus stand" />
        <Picker.Item label="Kumta" value="kumta" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Seat Number"
        onChangeText={text => handleInputChange('seat', text)}
        value={formData.seat}
      />

      <Text style={styles.priceText}>{t('price')}: ₹{price}</Text>

      <ReusableButton title={t('proceed')} onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default BookingFormScreen;


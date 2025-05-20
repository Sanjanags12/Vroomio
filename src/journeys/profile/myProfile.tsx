import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';

import styles from './myProfile.style';
import EditIcon from '../../components/svgs/editIcon';

const ProfileScreen = ({
  navigation,
}: {
  navigation: {navigate: (screen: string, params?: any) => void};
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [email, setEmail] = useState('park.jasmin@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [name, setName] = useState('Jimin Park');

  const handleMyBooking = () => {
    navigation.navigate('My Bookings');
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };
  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleEditPhone = () => {
    setIsEditingPhone(true);
  };

  const handleNameSubmit = () => {
    setIsEditingName(false);
    Keyboard.dismiss();
  };
  const handleEmailSubmit = () => {
    setIsEditingEmail(false);
    Keyboard.dismiss();
  };

  const handlePhoneSubmit = () => {
    setIsEditingPhone(false);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.NameHeader}>
          <Text style={styles.label}>Hello There!!</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.section}>
          {/* Name Box */}
          <View style={styles.box}>
            <View style={styles.insideBox}>
              <Text style={styles.label}>Name</Text>
              {isEditingName ? (
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  onSubmitEditing={handleNameSubmit}
                  onBlur={handleNameSubmit}
                  keyboardType="name-phone-pad"
                  autoFocus
                />
              ) : (
                <Text style={styles.value}>{name}</Text>
              )}
            </View>
            <TouchableOpacity onPress={handleEditName}>
              <EditIcon />
            </TouchableOpacity>
          </View>

          {/* Email Box */}
          <View style={styles.box}>
            <View style={styles.insideBox}>
              <Text style={styles.label}>Email</Text>
              {isEditingEmail ? (
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  onSubmitEditing={handleEmailSubmit}
                  onBlur={handleEmailSubmit}
                  keyboardType="email-address"
                  autoFocus
                />
              ) : (
                <Text style={styles.value}>{email}</Text>
              )}
            </View>
            <TouchableOpacity onPress={handleEditEmail}>
              <EditIcon />
            </TouchableOpacity>
          </View>

          {/* Phone Box */}
          <View style={styles.box}>
            <View style={styles.insideBox}>
              <Text style={styles.label}>Phone Number</Text>
              {isEditingPhone ? (
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={setPhone}
                  onSubmitEditing={handlePhoneSubmit}
                  onBlur={handlePhoneSubmit}
                  keyboardType="phone-pad"
                  autoFocus
                />
              ) : (
                <Text style={styles.value}>{phone}</Text>
              )}
            </View>
            <TouchableOpacity onPress={handleEditPhone}>
              <EditIcon />
            </TouchableOpacity>
          </View>
        </View>

        {/* Cards */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Payment Information</Text>
          <Text style={styles.cardSubtitle}>
            View saved cards and payment methods
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleMyBooking}>
          <Text style={styles.cardTitle}>My Bookings</Text>
          <Text style={styles.cardSubtitle}>
            Check your upcoming and past trips
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Image
        style={{backgroundColor: 'red', height: 180, width: 420, padding: 20}}
        source={require('../../common/images/BusWallpaper.jpg')}></Image>
    </SafeAreaView>
  );
};

export default ProfileScreen;

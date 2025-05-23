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
  Alert,
} from 'react-native';

import styles from './myProfile.style';
import EditIcon from '../../components/svgs/editIcon';
import {useTranslation} from 'react-i18next';
import ReusableButton from '../../components/button/reButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform} from 'react-native';

const ProfileScreen = ({
  navigation,
}: {
  navigation: {navigate: (screen: string, params?: any) => void};
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [email, setEmail] = useState('san.art@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [name, setName] = useState('Sanjana');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {t} = useTranslation();
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
  const requestGalleryPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleAddPhoto = async () => {
    Alert.alert(
      'Profile Picture',
      'Choose an option',
      [
        {
          text: 'Camera',
          onPress: async () => {
            const cameraPermission = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
            );
            if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED) {
              launchCamera({mediaType: 'photo', quality: 0.7}, response => {
                if (response.assets && response.assets.length > 0) {
                  setProfileImage(response.assets[0].uri || null);
                }
              });
            }
          },
        },
        {
          text: 'Gallery',
          onPress: async () => {
            const hasPermission = await requestGalleryPermission();
            if (!hasPermission) return;

            launchImageLibrary({mediaType: 'photo', quality: 0.7}, response => {
              if (response.assets && response.assets.length > 0) {
                setProfileImage(response.assets[0].uri || null);
              }
            });
          },
        },
        {text: 'Cancel', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.NameHeader}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.label}>Hello There!!</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.profilePicContainer}>
              {profileImage ? (
                <Image source={{uri: profileImage}} style={styles.profilePic} />
              ) : (
                <View style={styles.profilePlaceholder} />
              )}
            </View>
          </View>

          <ReusableButton
            title={t('Add Profile pic')}
            onPress={handleAddPhoto}
            style={{width: 150, height: 50, marginTop:10 }}
            textStyle={{fontSize: 15}}
            
          />
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
          <Text style={styles.cardTitle}>{t('payment_info')}</Text>
          <Text style={styles.cardSubtitle}>{t('saved_card_info')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleMyBooking}>
          <Text style={styles.cardTitle}>{t('my_bookings')}</Text>
          <Text style={styles.cardSubtitle}>{t('check_bookings')}</Text>
        </TouchableOpacity>
      </ScrollView>
      <Image
        style={{backgroundColor: 'red', height: 180, width: 420, padding: 20}}
        source={require('../../common/images/BusWallpaper.jpg')}></Image>
    </SafeAreaView>
  );
};

export default ProfileScreen;

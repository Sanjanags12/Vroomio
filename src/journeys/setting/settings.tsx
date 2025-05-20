import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import styles from './settings.style';

const SettingScreen = ({ navigation }: { navigation: { navigate: (screen: string, params?: any) => void } }) => {
  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
    navigation.navigate('Home');
  };

  const handleDeleteAccount = () => {
    Alert.alert('Account Deleted', 'Your account has been deleted.');
    navigation.navigate('Home');
  };

   const handleVroomio = () => {
    navigation.navigate('KnowAbout');
  };

   const handleMyProfile = () => {
      navigation.navigate('Account');
    };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Settings</Text>

        <TouchableOpacity style={styles.item} onPress={handleMyProfile}>
          <Text style={styles.itemText}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} >
          <Text style={styles.itemText}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleVroomio}>
          <Text style={styles.itemText}>Know About Vroomio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <Text style={[styles.itemText, { color: 'orange' }]}>Log Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleDeleteAccount}>
          <Text style={[styles.itemText, { color: 'red' }]}>Delete Account</Text>
        </TouchableOpacity>
      </ScrollView>
      <Image
                        style={{backgroundColor: 'red', height: 180, width: 420, padding: 20}}
                        source={require('../../common/images/BusWallpaper.jpg')}></Image>
    </SafeAreaView>
  );
};

export default SettingScreen;

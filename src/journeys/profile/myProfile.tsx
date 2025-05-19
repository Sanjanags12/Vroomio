import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';

import styles from './myProfile.style';

const ProfileScreen =   ({ navigation }: { navigation: { navigate: (screen: string, params?: any) => void } })  => {
  const handleMyBooking = () => {
      navigation.navigate('My Bookings');
    };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>My Profile</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Jasmin Park</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>park.jasmin@example.com</Text>

          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.value}>+91 98765 43210</Text>
        </View>

        <TouchableOpacity style={styles.card} >
          <Text style={styles.cardTitle}>Payment Information</Text>
          <Text style={styles.cardSubtitle}>View saved cards and payment methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleMyBooking}>
          <Text style={styles.cardTitle}>My Bookings</Text>
          <Text style={styles.cardSubtitle}>Check your upcoming and past trips</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

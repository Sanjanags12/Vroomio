import React from 'react';
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './myBooking.styles';
import { useBooking } from '../../common/contexts/bookingContext';

const MyBookingScreen = ({ navigation }: { navigation: { navigate: (screen: string, params?: any) => void } }) => {
  const { bookings } = useBooking(); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>My Past Bookings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {bookings.map((bus) => (
          <TouchableOpacity key={bus.id} style={styles.busCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={styles.optionTitle}>{bus.traveller}</Text>
                <Text style={styles.bustype}>{bus.type}</Text>
              </View>
              <View style={styles.ratingBox}>
                <Text style={styles.ratingText}>⭐ {bus.ratings}</Text>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={styles.optionSubtitle}>Seats Available: {bus.seats}</Text>
              <Text style={styles.optionSubtitle}>Timings: {bus.timing}</Text>
            </View>

            <Text style={styles.priceText}>₹ {bus.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Image
              style={{backgroundColor: 'red', height: 180, width: 420, padding: 20}}
              source={require('../../common/images/BusWallpaper.jpg')}></Image>
    </SafeAreaView>
  );
};

export default MyBookingScreen;

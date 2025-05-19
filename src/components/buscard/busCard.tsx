
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

type Bus = {
  id: number;
  traveller: string;
  type: string;
  ratings: string;
  seats: string;
  timing: string;
  price: string;
};

type Props = {
  bus: Bus;
  onPress?: () => void;
};

const BusCard = ({bus, onPress}: Props): React.JSX.Element => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} disabled={!onPress}>
      <View style={styles.header}>
        <View>
          <Text style={styles.traveller}>{bus.traveller}</Text>
          <Text style={styles.type}>{bus.type}</Text>
        </View>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>⭐ {bus.ratings}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.subtitle}>Seats Available: {bus.seats}</Text>
        <Text style={styles.subtitle}>Timings: {bus.timing}</Text>
      </View>
      <Text style={styles.price}>₹ {bus.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  traveller: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    color: '#888',
  },
  ratingBox: {
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  ratingText: {
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
  },
  price: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default BusCard;

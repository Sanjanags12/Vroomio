import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import styles from './knowAbout.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';


type KnowAboutProp = RouteProp<RootStackParamList, 'KnowAbout'>;

const KnowAbout = ({
  navigation,
}: {
  navigation: {navigate: (screen: string, params?: any) => void};
}): React.JSX.Element =>  {
 

  const route = useRoute<KnowAboutProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{marginBottom: 40}}>
                <Text style={styles.title}>Vroomio</Text>
                <Text style={styles.subtitle}>Plan. Track. Ride.</Text>
                
              </View>


        <View style={styles.card} >
          <Text style={styles.subtitle}>Your all-in-one solution for intra-state bus journeys!</Text>
          <Text style={styles.cardSubtitle}> Vroomio is a powerful and easy-to-use mobile app designed to simplify and improve your within-the-state bus travel experience. Whether you're commuting for work, heading to college, visiting family, or planning a short getaway, Vroomio helps you find and book the best bus options – all in one place.</Text>
        </View>

        <View style = {styles.subcard}>
  <Text style ={styles.cardSubtitle}>
    From daily travel to weekend getaways, Vroomio makes state-wide travel simple and stress-free.
   </Text>

        </View>
 
   <Text style={styles.footer}>Travel smart. Travel Vroomio.</Text>
                <Image
                  style={{backgroundColor: 'red', height: 180, width: 380, padding: 20}}
                  source={require('../../common/images/BusWallpaper.jpg')}></Image>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KnowAbout;

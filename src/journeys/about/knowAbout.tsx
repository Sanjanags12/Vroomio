import React from 'react';
import { View, Text, SafeAreaView,  ScrollView,  Image } from 'react-native';
import styles from './knowAbout.style';

import { useTranslation } from 'react-i18next';


const KnowAbout = ({
  navigation,
}: {
  navigation: {navigate: (screen: string, params?: any) => void};
}): React.JSX.Element =>  {
  
    const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{marginBottom: 20}}>
                <Text style={styles.title}>Vroomio</Text>
                <Text style={styles.subtitle}>Plan. Track. Ride.</Text>
                
              </View>


        <View style={styles.card} >
          <Text style={styles.subtitle}>{t('all_in_one_solution')}</Text>
          <Text style={styles.cardSubtitle}>{t('vroomio_description')}</Text>
        </View>

        <View style = {styles.subcard}>
  <Text style ={styles.cardSubtitle}>
   {t('daily_to_weekend')}
   </Text>

        </View>
 
   <Text style={styles.footer}>Travel Smart. Travel Vroomio.</Text>
                
      </ScrollView>
      <Image
                  style={{backgroundColor: 'red', height: 180, width: 420, padding: 20}}
                  source={require('../../common/images/BusWallpaper.jpg')}></Image>
    </SafeAreaView>
  );
};

export default KnowAbout;

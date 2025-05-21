import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import styles from './settings.style';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../common/contexts/languageContext';

const SettingScreen = ({
  navigation,
}: {
  navigation: { navigate: (screen: string, params?: any) => void };
}) => {
  const { t } = useTranslation();
  const { changeLanguage, language } = useContext(LanguageContext)!;

  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const handleLogout = () => {
    Alert.alert(t('logout'), t('you_have_been_logged_out'));
    navigation.navigate('Home');
  };

  const handleDeleteAccount = () => {
    Alert.alert(t('delete_account'), t('account_deleted'));
    navigation.navigate('Home');
  };

  const handleVroomio = () => {
    navigation.navigate('KnowAbout');
  };

  const handleMyProfile = () => {
    navigation.navigate('Account');
  };

  const renderLanguageButton = (langCode: string, label: string) => (
    <TouchableOpacity
      key={langCode}
      style={[
        styles.item,
        language === langCode && { backgroundColor: '#e0e0e0' },
      ]}
      onPress={() => {
        changeLanguage(langCode);
        setShowLanguageOptions(false); 
      }}
    >
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>{t('settings')}</Text>

        <TouchableOpacity style={styles.item} onPress={handleMyProfile}>
          <Text style={styles.itemText}>{t('update_profile')}</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.item}
          onPress={() => setShowLanguageOptions(prev => !prev)}
        >
          <Text style={styles.itemText}>{t('language')}</Text>
        </TouchableOpacity>

        {showLanguageOptions && (
          <View style={{ paddingLeft: 20 }}>
            {renderLanguageButton('en', 'English')}
            {renderLanguageButton('hi', 'हिंदी')}
            {renderLanguageButton('kn', 'ಕನ್ನಡ')}
          </View>
        )}

        <TouchableOpacity style={styles.item} onPress={handleVroomio}>
          <Text style={styles.itemText}>Vroomio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <Text style={[styles.itemText, { color: 'orange' }]}>{t('logout')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleDeleteAccount}>
          <Text style={[styles.itemText, { color: 'red' }]}>{t('delete_account')}</Text>
        </TouchableOpacity>
      </ScrollView>

      <Image
        style={{ backgroundColor: 'red', height: 180, width: 420, padding: 20 }}
        source={require('../../common/images/BusWallpaper.jpg')}
      />
    </SafeAreaView>
  );
};

export default SettingScreen;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import hi from './locales/hi.json';
import kn from './locales/kn.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    kn: { translation: kn },
  },
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

const loadLanguage = async () => {
  const savedLanguage = await AsyncStorage.getItem('language');
  if (savedLanguage) {
    i18n.changeLanguage(savedLanguage);
  }
};
loadLanguage();

export default i18n;

import React, { createContext, useState, useEffect, ReactNode } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../i18';


interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => Promise<void>;
}

// Creating the language context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>(i18n.language);

  // Function to change the language
  const changeLanguage = async (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    await AsyncStorage.setItem('language', lang); 
  };

  // Load saved language on app start
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        setLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

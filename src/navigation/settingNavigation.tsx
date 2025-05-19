import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import KnowAbout from '../journeys/about/knowAbout';
import SettingScreen from '../journeys/setting/settings';


const Stack = createNativeStackNavigator<RootStackParamList>();

const  SettingNavigation = () => {
  return (
    <Stack.Navigator initialRouteName ='Setting' screenOptions={{ headerShown: false }} >
      
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{ presentation: 'modal' }} 
      />
       <Stack.Screen
        name="KnowAbout"
        component={KnowAbout}
        options={{ presentation: 'modal' }} 
      />
    </Stack.Navigator>
  );
};

export default SettingNavigation;

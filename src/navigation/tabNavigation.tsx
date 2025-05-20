import React from 'react';
import HomeScreen from '../journeys/homepage/homePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../journeys/setting/settings';
import HomeIcon from '../components/svgs/homeIcon';
import {colors} from '../common/constants/colors';
import ReceiptIcon from '../components/svgs/receiptIcon';
import SettingsIcon from '../components/svgs/settingsIcon';
import ProfileScreen from '../journeys/profile/myProfile';
import UserIcon from '../components/svgs/userIcon';
import MyBookingScreen from '../journeys/mybooking/myBookings';
import SettingNavigation from './settingNavigation';
import RootNavigation from './rootNavigation';

const home = 'Home';
const myBookings = 'My Bookings';
const myProfile = 'Account';
const settings = 'Settings';

const Tab = createBottomTabNavigator();

function TabNavigation(): React.JSX.Element {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={home} component={RootNavigation} options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={2}
              height={2}
              color={focused ? colors.highlight : '#D1D1D1'}
            />
          ),
        }}/>
      <Tab.Screen
        name={myBookings}
        component={MyBookingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ReceiptIcon
              width={5}
              height={5}
              color={focused ? colors.highlight : '#D1D1D1'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={myProfile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <UserIcon
              width={5}
              height={5}
              color={focused ? colors.highlight : '#D1D1D1'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={settings}
        component={SettingNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon
              width={2}
              height={2}
              color={focused ? colors.highlight : '#D1D1D1'}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
    
  );
}

export default TabNavigation;

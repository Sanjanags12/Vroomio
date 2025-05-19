import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusDetails from '../journeys/busdetails/busDetails';
import BusDescriptionScreen from '../journeys/busdescription/busDescription';
import HomeScreen from '../journeys/homepage/homePage';
import SuccessScreen from '../journeys/successpage/successful';
import MyBookingScreen from '../journeys/mybooking/myBookings';
import { RootStackParamList } from './types';
import BookingFormScreen from '../journeys/bookingform/bookingForm';
import PaymentMethodScreen from '../journeys/payment/paymentInfo';
import PaymentScreen from '../journeys/payment/finalPayment';
import KnowAbout from '../journeys/about/knowAbout';


const Stack = createNativeStackNavigator<RootStackParamList>();

const  RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="BusDetails"
        component={BusDetails}
        options={{ presentation: 'modal' }} 
      />
      <Stack.Screen
        name="BusDescription"
        component={BusDescriptionScreen}
        options={{ presentation: 'modal' }} 
      />
      <Stack.Screen
        name="BookingForm"
        component={BookingFormScreen}
        options={{ presentation: 'modal' }} 
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethodScreen}
        options={{ presentation: 'modal' }} 
      />
       <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ presentation: 'modal' }} 
      />
      <Stack.Screen
        name="MyBookings"
        component={MyBookingScreen}
      />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
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

export default RootNavigation;

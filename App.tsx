import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BookingProvider } from './src/common/contexts/bookingContext'; 
import TabNavigation from './src/navigation/tabNavigation';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </View>
      </BookingProvider>
    </QueryClientProvider>
  );
};

export default App;

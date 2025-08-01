import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from '@navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from '@store';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store} >
          <AppNavigation />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
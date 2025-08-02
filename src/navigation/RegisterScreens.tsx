import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlightTrackingScreen from '@screens/FlightTrackingScreen';

const Stack = createNativeStackNavigator();

const SignAllScreens = () => {
  return (
    <Stack.Navigator initialRouteName="FlightTracking" screenOptions={{ headerShown: false,gestureEnabled: false }}>
      <Stack.Screen name="FlightTracking" component={FlightTrackingScreen} />
    </Stack.Navigator>
  );
}

export { SignAllScreens };

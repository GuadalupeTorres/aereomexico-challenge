import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignAllScreens } from './RegisterScreens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
  <Stack.Navigator initialRouteName="SignAllScreens" screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="SignAllScreens" component={SignAllScreens} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
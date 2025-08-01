import React from 'react';
import { Image, View,Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Bienvenido a Aeroméxico</Text>
    </View>
  );
}


export default WelcomeScreen;
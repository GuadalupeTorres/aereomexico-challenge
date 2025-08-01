import React from 'react';
import { Image, View,Text } from 'react-native';
import { Button, ButtonText } from '@components/Button';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Bienvenido a Aeroméxico</Text>
      <Button>
        <ButtonText>Iniciar sesión</ButtonText>
      </Button>
    </View>
  );
}


export default WelcomeScreen;
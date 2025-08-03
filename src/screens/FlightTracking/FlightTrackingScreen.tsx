import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import TabSelector from '@components/TabSelector/TabSelector';
import InputField from '@components/InputField/InputField';
import ButtonSquare from '@components/ButtonSquare/ButtonSquare';
import { useFlightTrackingHook } from '../../hooks/useFlightTracking';
import Text from '@components/Text/Text';

import Styles from './FlightTracking.styles';

const FlightTrackingScreen = () => {
  const vm = useFlightTrackingHook();

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.containerHeader}>
          <Text h26 black semibold center style={Styles.lineheight}>
            Track your flight
          </Text>
          <Text h16 black regular center>
            Keep you informed in real time!
          </Text>
        </View>
        <TabSelector selectedTab={vm.tab} onSelect={vm.setTab} />
        <View style={Styles.formWrapper}>
          <View style={Styles.inputsRow}>
            <View style={Styles.inputLeft}>
              <InputField
                label="Flight number"
                value={vm.flightNumber}
                placeholder="AM 500"
                onChangeText={vm.setFlightNumber}
              />
            </View>
            <View style={Styles.inputRight}>
              <InputField
                label="Date of departure"
                value={vm.departureDate}
                placeholder="Tuesday, Nov 21"
                onChangeText={vm.setDepartureDate}
              />
            </View>
          </View>
          <View style={Styles.searchButtonWrapper}>
            <ButtonSquare size='full' black onPress={vm.searchFlight}>
              <Text h1 bold white center>
                Search Flight
              </Text>
            </ButtonSquare>
            <View style={Styles.assistanceWrapper}>
              <Text h12 black regular center>Can’t find your flight number?</Text>
              <View style={Styles.suggestionContainer}>
                <Text h12 black regular center>Try searching by </Text>
                <TouchableOpacity onPress={() => console.log('Navigating to destination...')}>
                  <Text h12 semibold black style={Styles.link}>destination</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FlightTrackingScreen;

import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import TabSelector from '@components/TabSelector/TabSelector';
import InputField from '@components/InputField/InputField';
import ButtonSquare from '@components/ButtonSquare/ButtonSquare';
import { useFlightTrackingHook } from '../../hooks/useFlightTracking';
import Text from '@components/Text/Text';

import Styles from './FlightTracking.styles';
import { LinkText } from '@components/LinkText/LinkText';
import { GeneralStyles } from '@styles/GeneralStyles';

const FlightTrackingScreen = () => {
  const selectedFlight = useFlightTrackingHook();

  return (
    <View style={Styles.container}>
        <View style={Styles.containerHeader}>
          <Text h26 black semibold center style={Styles.lineheight}>
            Track your flight
          </Text>
          <Text h16 black regular center>
            Keep you informed in real time!
          </Text>
        </View>
        <TabSelector selectedTab={selectedFlight.tab} onSelect={selectedFlight.setTab} />

        <View style={Styles.formWrapper}>
          {selectedFlight.tab === 'flight' && (
            <View style={Styles.inputsRow}>
              <View style={Styles.inputLeft}>
                <InputField
                  label="Flight number"
                  value={selectedFlight.flightNumber}
                  placeholder="AM 500"
                  onChangeText={selectedFlight.setFlightNumber}
                />
              </View>
              <View style={Styles.inputRight}>
                <InputField
                  label="Date of departure"
                  value={selectedFlight.departureDate}
                  placeholder="Tuesday, Nov 21"
                  onChangeText={selectedFlight.setDepartureDate}
                />
              </View>
            </View>
          )}
          {selectedFlight.tab !== 'flight' && (
            <>
              <View style={[GeneralStyles.flexRow, GeneralStyles.flexGap]}>
                <View style={Styles.inputLeft}>
                  <InputField
                    label="Origin"
                    value={selectedFlight.flightNumber}
                    placeholder="Origin"
                    onChangeText={selectedFlight.setFlightNumber}
                  />
                </View>
                <View style={Styles.inputRight}>
                  <InputField
                    label="Destination"
                    value={selectedFlight.flightNumber}
                    placeholder="Destination"
                    onChangeText={selectedFlight.setFlightNumber}
                  />
                </View>
              </View>
              <View style={Styles.searchButtonWrapper}>
                <InputField
                  label="Date of departure"
                  value={selectedFlight.flightNumber}
                  placeholder="Date of departure"
                  onChangeText={selectedFlight.setFlightNumber}
                />
              </View>
            </>
          )}
          <View style={Styles.searchButtonWrapper}>
            <ButtonSquare size='full' black onPress={selectedFlight.searchFlight}>
              <Text h1 bold white center>
                Search Flight
              </Text>
            </ButtonSquare>
            <View style={Styles.assistanceWrapper}>
              <Text h12 black regular center>Can’t find your flight number?</Text>
              <View style={GeneralStyles.flexRow}>
                <Text h12 black regular center>Try searching by </Text>
                <TouchableOpacity onPress={() => console.log('Navigating to destination...')}>
                  <LinkText>
                    <Text h12 semibold black style={Styles.link}>{selectedFlight.tab === 'flight'? "destination" : "flight number"}</Text>
                  </LinkText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    </View>
  );
};

export default FlightTrackingScreen;

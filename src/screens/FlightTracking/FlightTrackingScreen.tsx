import React,{useState} from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import TabSelector from '@components/TabSelector/TabSelector';
import InputField from '@components/InputField/InputField';
import ButtonSquare from '@components/ButtonSquare/ButtonSquare';
import useFlightSearch  from '@hooks/useFlightTracking';
import Text from '@components/Text/Text';

import Styles from './FlightTracking.styles';
import { LinkText } from '@components/LinkText/LinkText';
import { GeneralStyles } from '@styles/GeneralStyles';
import { useNavigation } from '@react-navigation/native';
import { getFlightByNumber, getFlightsByRoute } from '../../services/SearchFlightService';


const FlightTrackingScreen = () => {
  const {loading, tab,setTab,flightNumber,flightDestination,flightOrigin,departureDate,setFlightDestination,
    setDepartureDate,setFlightNumber,setFlightOrigin,searchByNumber, searchByRoute } = useFlightSearch();

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
        <TabSelector selectedTab={tab} onSelect={setTab} />

        <View style={Styles.formWrapper}>
          {tab === 'flight' && (
            <View style={Styles.inputsRow}>
              <View style={Styles.inputLeft}>
                <InputField
                  label="Flight number"
                  value={flightNumber}
                  placeholder="AM 500"
                  onChangeText={setFlightNumber}
                />
              </View>
              <View style={Styles.inputRight}>
                <InputField
                  label="Date of departure"
                  value={departureDate}
                  placeholder="Tuesday, Nov 21"
                  onChangeText={setDepartureDate}
                />
              </View>
            </View>
          )}
          {tab !== 'flight' && (
            <>
              <View style={[GeneralStyles.flexRow, GeneralStyles.flexGap]}>
                <View style={Styles.inputLeft}>
                  <InputField
                    label="Origin"
                    value={flightOrigin}
                    placeholder="Origin"
                    onChangeText={setFlightOrigin}
                  />
                </View>
                <View style={Styles.inputRight}>
                  <InputField
                    label="Destination"
                    value={flightDestination}
                    placeholder="Destination"
                    onChangeText={setFlightDestination}
                  />
                </View>
              </View>
              <View style={Styles.searchButtonWrapper}>
                <InputField
                  label="Date of departure"
                  value={flightNumber}
                  placeholder="Date of departure"
                  onChangeText={setFlightNumber}
                />
              </View>
            </>
          )}
          <View style={Styles.searchButtonWrapper}>
            <ButtonSquare size='full' black onPress={tab === 'flight'? searchByNumber : searchByRoute}>
              <Text h1 bold white center>
                Search Flight
              </Text>
            </ButtonSquare>
            <View style={Styles.assistanceWrapper}>
              <Text h12 black regular center>Can’t find your flight number?</Text>
              <View style={GeneralStyles.flexRow}>
                <Text h12 black regular center>Try searching by </Text>
                <TouchableOpacity onPress={() => tab === 'flight'? setTab('flight') : setTab('destination')} >
                  <LinkText>
                    <Text h12 semibold black style={Styles.link}>{tab === 'flight'? "destination" : "flight number"}</Text>
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

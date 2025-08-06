import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import TabSelector from '@components/TabSelector/TabSelector';
import InputField from '@components/InputField/InputField';
import ButtonSquare from '@components/ButtonSquare/ButtonSquare';
import useFlightSearch from '@hooks/useFlightTracking';
import Text from '@components/Text/Text';

import Styles from './FlightTracking.styles';
import { LinkText } from '@components/LinkText/LinkText';
import { GeneralStyles } from '@styles/GeneralStyles';
import DatePickerInput from '@components/DatePickerInput/DatePickerInput';
import { useFocusEffect } from '@react-navigation/native';

const FlightTrackingScreen = () => {
  const { loading, tab, setTab, flightNumber, flightDestination, flightOrigin, departureDate, setFlightDestination,
    setDepartureDate, setFlightNumber, setFlightOrigin, searchByNumber, searchByRoute, handleCleanParams } = useFlightSearch();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useFocusEffect(
    useCallback(() => {
      setFlightNumber('');
      setFlightDestination('');
      setFlightOrigin('');
      setSelectedDate(new Date);
      setDepartureDate(new Date);
    }, [])
  );

  const handleChangeTab =()=>{
    tab === 'flight' ? setTab('destination') : setTab('flight')
    handleCleanParams();
  }

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
              <DatePickerInput
                label="Date of departure"
                value={selectedDate}
                onChange={setSelectedDate}
                mode="date"
                icon="event"
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
              <DatePickerInput
                label="Date of departure"
                value={selectedDate}
                onChange={setSelectedDate}
                mode="date"
                icon="event"
              />
            </View>
          </>
        )}
        <View style={Styles.searchButtonWrapper}>
          <ButtonSquare size='full'
            black
            onPress={tab === 'flight' ? searchByNumber : searchByRoute}
            disabled={
              (tab === 'flight' && (flightNumber.trim() === '' || !departureDate)) ||
              (tab === 'destination' && (
                flightOrigin.trim() === '' ||
                flightDestination.trim() === '' ||
                !departureDate
              ))
            }
          >
            <Text h1 bold white center>
              Search Flight
            </Text>
          </ButtonSquare>
          <View style={Styles.assistanceWrapper}>
            <Text h12 black regular center>Can’t find your flight number?</Text>
            <View style={GeneralStyles.flexRow}>
              <Text h12 black regular center>Try searching by </Text>
              <TouchableOpacity onPress={() => handleChangeTab()} >
                <LinkText>
                  <Text h12 semibold black style={Styles.link}>{tab === 'flight' ? "destination" : "flight number"}</Text>
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

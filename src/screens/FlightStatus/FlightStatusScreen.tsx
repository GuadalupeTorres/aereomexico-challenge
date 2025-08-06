import React, { useState, useEffect } from 'react';
import { FlatList, View, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import FlightCard from '@components/FlightCard/FlightCard';
import Text from '@components/Text/Text';
import { useNavigation } from '@react-navigation/native';
import Styles from './FlightStatus.styles';
import BackArrow from '@assets/icons/back-arrow.png';
import useFlightSearch from '@hooks/useFlightTracking';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';
import { formatDateToLabel } from '@utils/date.utils';

const FlightStatusScreen = () => {
  const { flights, loading, tab, departureDate, handleSelectFlight, searchParams } = useFlightSearch();
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');

  const navigation = useNavigation();


  const handleFlightDetail = (item: any) => {
    handleSelectFlight(item);
    navigation.navigate('FlightDetail');
  }

  const renderItem = ({ item }) => {
    return (
      <FlightCard
        onPress={() => {
          handleFlightDetail(item)
        }}
        data={item} />
    );
  }

  useEffect(() => {
    if (flights.length > 0) {
      const item = flights[0];
      setSelectedOrigin(item?.segment?.departureAirport);
      setSelectedDestination(item?.segment?.arrivalAirport);
    }
  }, [flights]);


  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={Styles.container}>
      <SafeAreaView>

        {loading ? (
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <ActivityIndicator size="large" color={Colors.info} />
          </View>
        ) : (
          <>
            <View style={Styles.containHeader}>
              <TouchableOpacity style={Styles.backButton} onPress={handleGoBack}>
                <Image source={BackArrow} style={Styles.icon} />
              </TouchableOpacity>
              <View>
                {searchParams?.origin && (
                  <Text h32 black semibold right>{`${searchParams.origin} ➞ ${searchParams.destination}`}</Text>
                )}
                {searchParams?.flightNumber && (
                  <Text h32 black semibold right>{searchParams.flightNumber}</Text>
                )}

                <View style={[Styles.rowCalendar]}>
                  <Text h16 regular black>{formatDateToLabel(searchParams.departureDate)}</Text>
                  <View style={Styles.divider} />
                  <TouchableOpacity style={Styles.changeButton} onPress={() => navigation.navigate('FlightTracking')}>
                    <Image source={require('@assets/icons/calendar.png')} style={Styles.iconSmall} />
                    <Text h16 regular black style={Styles.changeText}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {flights.length > 0 && (
              <>
                <View style={Styles.containRoute}>
                  {searchParams.origin && (
                    <Text h14 semibold black>{`${searchParams.origin} to ${searchParams.destination}`}</Text>
                  )}
                  {searchParams.flightNumber && (
                    <Text h14 semibold black>{`${selectedOrigin} to ${selectedDestination}`}</Text>
                  )}
                  <Text h14 regular black>{flights.length}</Text>
                </View>

                <FlatList
                  data={flights}
                  keyExtractor={(item) => item?.flightId}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={true}
                  contentContainerStyle={{ paddingBottom: scale(180) }}
                  keyboardShouldPersistTaps="handled"
                />
              </>
            )}

          </>
        )}
      </SafeAreaView>
    </View>
  );
};

export default FlightStatusScreen;
import React from 'react';
import { FlatList, View, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import FlightCard from '@components/FlightCard/FlightCard';
import Text from '@components/Text/Text';
import { useNavigation, useRoute } from '@react-navigation/native';
import Styles from './FlightStatus.styles';
import BackArrow from '@assets/icons/back-arrow.png';
import useFlightSearch from '@hooks/useFlightTracking';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';

const FlightStatusScreen = () => {
  const { flights, loading, tab, departureDate, handleSelectFlight, searchParams } = useFlightSearch();
  const navigation = useNavigation();


  const handleFlightDetail = (item: any) => {
    handleSelectFlight(item);
    navigation.navigate('FlightDetail');
  }

  const renderItem = ({ item }) => (
    <FlightCard onPress={() => handleFlightDetail(item)} data={item}></FlightCard>
  );

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
                {searchParams.origin && (
                  <Text h32 black semibold right>{`${searchParams.origin} to ${searchParams.destination}`}</Text>
                )}
                {searchParams.flightNumber && (
                  <Text h32 black semibold right>{searchParams.flightNumber}</Text>
                )}

                <View style={[Styles.rowCalendar]}>
                  <Text h16 regular black>{searchParams.departureDate}</Text>
                  <View style={Styles.divider} />
                  <TouchableOpacity style={Styles.changeButton}>
                    <Image source={require('@assets/icons/calendar.png')} style={Styles.iconSmall} />
                    <Text h16 regular black style={Styles.changeText}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={Styles.containRoute}>
              <Text h14 semibold black>{`${searchParams.origin} to ${searchParams.destination}`}</Text>
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
      </SafeAreaView>
    </View>
  );
};

export default FlightStatusScreen;
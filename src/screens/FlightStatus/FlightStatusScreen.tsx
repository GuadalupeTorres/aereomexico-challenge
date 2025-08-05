import React from 'react';
import { FlatList, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import FlightCard from '@components/FlightCard/FlightCard';
import Text from '@components/Text/Text';
import { useNavigation, useRoute } from '@react-navigation/native';
import Styles from './FlightStatus.styles';
import BackArrow from '@assets/icons/back-arrow.png';
import useFlightSearch  from '@hooks/useFlightTracking';

const FlightStatusScreen = () => {
  const { flights, loading,flightNumber,departureDate,handleSelectFlight,searchParams } = useFlightSearch();
  const navigation = useNavigation();


  const handleFlightDetail=(item: any)=>{
    handleSelectFlight(item);
    navigation.navigate('FlightDetail');
  }

  const renderItem = ({ item }) => (
    <FlightCard onPress={()=>handleFlightDetail(item)} data={item}></FlightCard>
  );

  const handleGoBack=()=>{
    navigation.goBack();
  }

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.containHeader}>
          <TouchableOpacity style={Styles.backButton} onPress={handleGoBack}>
            <Image source={BackArrow} style={Styles.icon} />
          </TouchableOpacity>
          <View>
            <Text h32 black semibold right>{searchParams.flightNumber}</Text>
            <View style={[Styles.rowCalendar]}>
              <Text h16 regular black>{searchParams.departureDate}</Text>
              <View style={Styles.divider}/>
              <TouchableOpacity style={Styles.changeButton}>
                <Image source={require('@assets/icons/calendar.png')} style={Styles.iconSmall} />
                <Text h16 regular black style={Styles.changeText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.containRoute}>
          <Text h14 semibold black>{`${''} ${''}`}Mexico City  to Bogota</Text>
          <Text h14 regular black>{flights.length}</Text>
        </View>
        <FlatList
          data={flights}
          keyExtractor={(item) => item?.segment?.segmentCode}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default FlightStatusScreen;


{/* <View style={Styles.row}>
              <Text>AM 500</Text>
              <Text>Change</Text>
            </View> */}
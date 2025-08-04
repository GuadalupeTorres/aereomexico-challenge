import React from 'react';
import { FlatList, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import FlightCard from '@components/FlightCard/FlightCard';
import Text from '@components/Text/Text';
import { useNavigation, useRoute } from '@react-navigation/native';
import Styles from './FlightStatus.styles';
import BackArrow from '@assets/icons/back-arrow.png';

// Simulación de datos — puedes reemplazarlo por tu lógica real
const flightData = [
  {
    id: '1',
    flightNumber: 'AMX 782',
    departureTime: '10:30',
    arrivalTime: '14:45',
    flightStatus: 'Delayed',
  },
  {
    id: '2',
    flightNumber: 'Viva 425',
    departureTime: '15:00',
    arrivalTime: '17:40',
    flightStatus: 'On time',
  },
  {
    id: '3',
    flightNumber: 'Viva jdhdk',
    departureTime: '15:00',
    arrivalTime: '17:40',
    flightStatus: 'On time',
  },
];

const FlightStatusScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();


  const handleFlightDetail=()=>{
    navigation.navigate('FlightDetail')
  }

  const renderItem = ({ item }) => (
    <FlightCard onPress={handleFlightDetail}></FlightCard>
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
            <Text h32 black semibold right>AM 500</Text>
            <View style={[Styles.rowCalendar]}>
              <Text h16 regular black>Tuesday, Nov 21</Text>
              <View style={Styles.divider}/>
              <TouchableOpacity style={Styles.changeButton}>
                <Image source={require('@assets/icons/calendar.png')} style={Styles.iconSmall} />
                <Text h16 regular black style={Styles.changeText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.containRoute}>
          <Text h14 semibold black>Mexico City  to Bogota</Text>
          <Text h14 regular black>4 results</Text>
        </View>
        <FlatList
          data={flightData}
          keyExtractor={(item) => item.id}
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
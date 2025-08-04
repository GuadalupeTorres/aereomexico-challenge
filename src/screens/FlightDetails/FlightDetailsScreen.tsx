import React from 'react';
import { View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Text from '@components/Text/Text';
import ImageComponent from '@components/ImageBackground/ImageBackground';
import { scale, verticalScale } from 'react-native-size-matters';
import Styles from './FlightDetails.styles';
import { GeneralStyles } from '@styles/GeneralStyles';
import { useNavigation } from '@react-navigation/native';
import FlightTimeRow from '@components/FlightTimeRow/FlightTimeRow';

import BackArrow from '@assets/icons/back-arrow.png';
import takeOf from '@assets/icons/take-off.png';
import planeDown from '@assets/icons/plane-down.png';
import imageBackground from '@assets/imageBackground.png';

const FlightDetailsScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1 }}>
        <ImageComponent source={imageBackground} height={verticalScale(346)} >
          <View style={Styles.containHeader}>
            <TouchableOpacity style={Styles.containBackButton} onPress={handleGoBack}>
              <Image source={BackArrow} style={Styles.backIcon} />
            </TouchableOpacity>
          </View>
        </ImageComponent>
      <View style={Styles.containDetail}>
        <View style={[Styles.card, GeneralStyles.flexRow]}>
          <View style={GeneralStyles.flexColumn}>
            <Text h24 semibold black><Text lightGray>AM</Text> 500</Text>
            <Text h14 black light>Tuesday, November 21</Text>
          </View>
          <View style={Styles.arrived}>
            <Text white semibold h12>Arrived</Text>
          </View>
        </View>
        <View style={Styles.divider} />
        <View style={Styles.containdDetail}>
          <View style={Styles.containTime}>
            <FlightTimeRow
              departureTime="06:24"
              arrivalTime="09:21"
              departureCode="MEX"
              arrivalCode="CUN"
              duration="2h 28m"
              status="arrived"
            />
          </View>
          <View style={Styles.divider} />
          <View>
            <Text black semibold h18 style={{ marginBottom: scale(25), marginTop: scale(25) }}>Flight details</Text>
            <View style={GeneralStyles.flexRowSB}>
              <View style={GeneralStyles.flexRow}>
                <Image
                  source={takeOf}
                  style={{
                    width: scale(20),
                    height: scale(20), // opcional para mantener proporción
                    resizeMode: 'contain',
                  }}
                />
                <Text black semibold h12>Departure</Text>
              </View>
              <Text black regular h12>Ciudad de México - AICM</Text>
            </View>
            <View style={Styles.infoTerminal}>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Terminal</Text>
                <Text black bold h12>2</Text>
              </View>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Gate</Text>
                <Text black bold h12>62</Text>
              </View>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Boarding</Text>
                <Text black bold h12>06:00</Text>
              </View>
            </View>
            <View style={GeneralStyles.flexRowSB}>
              <View style={GeneralStyles.flexRow}>
                <Image
                  source={planeDown}
                  style={{
                    width: scale(20),
                    height: scale(20), // opcional para mantener proporción
                    resizeMode: 'contain',
                  }}
                />
                <Text black semibold h12>Arrival</Text>
              </View>
              <Text black regular h12>Cancún  - Terminal 4</Text>
            </View>
            <View style={Styles.infoTerminal}>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Terminal</Text>
                <Text black bold h12>2</Text>
              </View>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Est. Landing</Text>
                <Text black bold h12>09:21</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlightDetailsScreen;

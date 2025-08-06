import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from '@components/Text/Text';
import ImageComponent from '@components/ImageBackground/ImageBackground';
import { scale, verticalScale } from 'react-native-size-matters';
import Styles from './FlightDetails.styles';
import { GeneralStyles } from '@styles/GeneralStyles';
import { useNavigation } from '@react-navigation/native';
import FlightTimeRow from '@components/FlightTimeRow/FlightTimeRow';
import useFlightSearch from '@hooks/useFlightTracking';

import BackArrow from '@assets/icons/back-arrow.png';
import takeOf from '@assets/icons/take-off.png';
import planeDown from '@assets/icons/plane-down.png';
import imageBackground from '@assets/imageBackground.png';
import { formatDateToLabel, formatDuration, formatTime } from '@utils/date.utils';
import StatusTag from '@components/StatusTag/StatusTag';

const FlightDetailsScreen = () => {
  const navigation = useNavigation();
  const { selectedFlight } = useFlightSearch();

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
            <Text h24 semibold black><Text lightGray>{selectedFlight.segment.operatingCarrier}</Text> {selectedFlight.segment.operatingFlightCode}</Text>
            <Text h14 black light>{formatDateToLabel(selectedFlight.outGate.dateTimeLocal)}</Text>
          </View>
          <StatusTag status={selectedFlight?.status} isDetail />
        </View>
        <View style={Styles.divider} />
        <View style={Styles.containdDetail}>
          <View style={Styles.containTime}>
            <FlightTimeRow
              departureTime={formatTime(selectedFlight.estimatedDepartureTime)}
              arrivalTime={formatTime(selectedFlight.estimatedArrivalTime)}
              departureCode={selectedFlight.segment.departureAirport}
              arrivalCode={selectedFlight.segment.arrivalAirport}
              duration={formatDuration(selectedFlight.segment.flightDurationInMinutes)}
              status={selectedFlight?.status}
            />
          </View>
          <View style={Styles.divider} />
          <View>
            <Text black semibold h18 style={{ marginBottom: scale(20), marginTop: scale(25) }}>Flight details</Text>
            <View style={GeneralStyles.flexRowSB}>
              <View style={GeneralStyles.flexRow}>
                <Image
                  source={takeOf}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    resizeMode: 'contain',
                  }}
                />
                <Text black semibold h12>Departure</Text>
              </View>
              <Text black regular h12>{selectedFlight.segment.arrivalAirport}</Text>
            </View>
            <View style={Styles.infoTerminal}>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Terminal</Text>
                <Text black bold h12>{selectedFlight.boardingTerminal}</Text>
              </View>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Gate</Text>
                <Text black bold h12>{selectedFlight.boardingGate}</Text>
              </View>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Boarding</Text>
                <Text black bold h12>{formatTime(selectedFlight.segment.departureDateTime)}</Text>
              </View>
            </View>
            <View style={GeneralStyles.flexRowSB}>
              <View style={GeneralStyles.flexRow}>
                <Image
                  source={planeDown}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    resizeMode: 'contain',
                  }}
                />
                <Text black semibold h12>Arrival</Text>
              </View>
              <Text black regular h12>{`${selectedFlight.segment.departureAirport} - Terminal ${selectedFlight.arrivalTerminal}`}</Text>
            </View>
            <View style={Styles.infoTerminal}>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Terminal</Text>
                <Text black bold h12>{selectedFlight.arrivalTerminal}</Text>
              </View>
              <View style={GeneralStyles.flexColumn}>
                <Text black regular h12>Est. Landing</Text>
                <Text black bold h12>{formatTime(selectedFlight.segment.arrivalDateTime)}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlightDetailsScreen;

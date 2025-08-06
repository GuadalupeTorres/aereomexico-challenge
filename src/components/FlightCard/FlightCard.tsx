import React, { useState } from 'react';
import { FlightCardWrapper, Row, PaddedView, DividerLine } from './FlightCard.styles';
import { Image, TouchableOpacity, View } from 'react-native';
import Text from '@components/Text/Text';
import StatusTag from '@components/StatusTag/StatusTag';
import { StyledSwitch, SwitchContainer } from '@components/Switch/Switch';
import { LinkText } from '@components/LinkText/LinkText';
import { FlightCardProps } from './types';
import FlightTimeRow from '@components/FlightTimeRow/FlightTimeRow';
import { formatDuration, formatTime } from '@utils/date.utils';
import useFlightSearch  from '@hooks/useFlightTracking';

const FlightCard: React.FC<FlightCardProps> = ({onPress,data}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { handleFavorites } = useFlightSearch();

  return (
    <FlightCardWrapper>
      <PaddedView>
        <Row>
          <View style={{ width: 80, height: 28, position: 'relative', top: -5, left: -18 }}>
            <StatusTag status={data?.status}/>
          </View>
          <Row>
            <Text h11 black semibold>Favorite</Text>
            <SwitchContainer>
              <StyledSwitch
                value={data.isFavorite}
                onValueChange={()=>handleFavorites(data.flightId)}
              />
            </SwitchContainer>
          </Row>
        </Row>
        <FlightTimeRow
          departureTime={formatTime(data.estimatedDepartureTime)}
          arrivalTime={formatTime(data.estimatedArrivalTime)}
          departureCode={data.segment.departureAirport}
          arrivalCode={data.segment.arrivalAirport}
          duration={formatDuration(data.segment.flightDurationInMinutes)}
          status={data?.status}
        />
      </PaddedView>
      <DividerLine />
      <PaddedView>
        <Row>
          <Text h12 black semibold>{`${data.segment.operatingCarrier} ${data.segment.operatingFlightCode}`}</Text>
          <TouchableOpacity onPress={onPress}>
            <Row>
              <LinkText>
                <Text h11 regular black >Detail</Text>
              </LinkText>
              <Image source={require('@assets/icons/row-right.png')} />
            </Row>
          </TouchableOpacity>
        </Row>
      </PaddedView>
    </FlightCardWrapper>

  );
};

export default FlightCard;



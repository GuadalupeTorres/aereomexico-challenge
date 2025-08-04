import React, { useState } from 'react';
import { InputFieldProps } from '@components/InputField/types';
import { FlightCardWrapper, Row, PaddedView, DividerLine } from './FlightCard.styles';
import flight from '@assets/icons/arrive.png';
import { Image, TouchableOpacity, View } from 'react-native';
import Text from '@components/Text/Text';
import { scale } from 'react-native-size-matters';
import StatusTag from '@components/StatusTag/StatusTag';
import { StyledSwitch, SwitchContainer } from '@components/Switch/Switch';
import { LinkText } from '@components/LinkText/LinkText';
import { FlightCardProps } from './types';
import FlightTimeRow from '@components/FlightTimeRow/FlightTimeRow';

const FlightCard: React.FC<FlightCardProps> = ({onPress}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <FlightCardWrapper>
      <PaddedView>
        <Row>
          <View style={{ width: 80, height: 28, position: 'relative', top: -5, left: -18 }}>
            <StatusTag status="arrived" />
          </View>
          <Row>
            <Text h11 black semibold>Favorite</Text>
            <SwitchContainer>
              <StyledSwitch
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
            </SwitchContainer>
          </Row>
        </Row>
        <FlightTimeRow
          departureTime="06:24"
          arrivalTime="09:21"
          departureCode="MEX"
          arrivalCode="CUN"
          duration="2h 28m"
          status="delayed"
        />
      </PaddedView>
      <DividerLine />
      <PaddedView>
        <Row>
          <Text h12 black semibold>AM 500</Text>
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



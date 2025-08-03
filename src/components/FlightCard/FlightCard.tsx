import React, { useState } from 'react';
import { InputFieldProps } from '@components/InputField/types';
import { FlightCardWrapper, Row, PaddedView, DividerLine } from './FlightCard.styles';
import flight from '@assets/icons/flight.png';
import { Image, TouchableOpacity, View } from 'react-native';
import Text from '@components/Text/Text';
import { scale } from 'react-native-size-matters';
import StatusTag from '@components/StatusTag/StatusTag';
import { StyledSwitch, SwitchContainer } from '@components/Switch/Switch';
import { LinkText } from '@components/LinkText/LinkText';

const FlightCard: React.FC = ({
}) => {
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
        <Row>
          <Text h22 black semibold>06:24</Text>
          <Image
            source={flight}
            style={{
              width: scale(128),
              height: scale(40), // opcional para mantener proporción
              resizeMode: 'contain',
            }}
          />
          <Text h22 black semibold>09:21</Text>
        </Row>
        <Row>
          <Text h14 black semibold>MEX</Text>
          <Text h10 black semibold>2h 28m</Text>
          <Text h14 semibold black>CUN</Text>
        </Row>
      </PaddedView>
      <DividerLine />
      <PaddedView>
        <Row>
          <Text h12 black semibold>AM 500</Text>
          <TouchableOpacity>
            <Row>
              <LinkText onPress={() => console.log('Navegando...')}>
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



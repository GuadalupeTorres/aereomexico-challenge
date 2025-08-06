import React from 'react';
import {
  Row,
  TimeText,
  CodeText,
  DurationText,
  FlightImage,
} from './FlightTimeRow.styles';
import { FlightTimeRowProps } from './FlightTimeRow.types';

import ArrivedIcon from '@assets/icons/arrive.png';
import InAirIcon from '@assets/icons/in-air.png';
import DelayedIcon from '@assets/icons/delay.png';
import Text from '@components/Text/Text';

const statusIcons = {
  ARRIVED: ArrivedIcon,
  ON_TIME: InAirIcon,
  DELAYED: DelayedIcon,
};

const FlightTimeRow: React.FC<FlightTimeRowProps> = ({
  departureTime,
  arrivalTime,
  departureCode,
  arrivalCode,
  duration,
  status,
}) => {
  const flightImage = statusIcons[status];

  return (
    <>
      <Row>
        <Text h22 semibold black>{departureTime}</Text>
        <FlightImage source={flightImage} />
        <Text h22 semibold black>{arrivalTime}</Text>
      </Row>

      <Row>
        <Text h14 regular black>{departureCode}</Text>
        <Text h10 semibold overlayBlack>{duration}</Text>
        <Text h14 regular black>{arrivalCode}</Text>
      </Row>
    </>
  );
};

export default FlightTimeRow;

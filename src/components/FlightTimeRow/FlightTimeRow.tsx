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
        <TimeText>{departureTime}</TimeText>
        <FlightImage source={flightImage} />
        <TimeText>{arrivalTime}</TimeText>
      </Row>

      <Row>
        <CodeText>{departureCode}</CodeText>
        <DurationText>{duration}</DurationText>
        <CodeText>{arrivalCode}</CodeText>
      </Row>
    </>
  );
};

export default FlightTimeRow;

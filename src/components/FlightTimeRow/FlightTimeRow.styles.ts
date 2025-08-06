import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`;

export const FlightImage = styled.Image`
  width: 58%;
  height: ${scale(40)}px;
  resize-mode: contain;
`;

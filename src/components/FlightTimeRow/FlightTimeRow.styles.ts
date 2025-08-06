import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${scale(4)}px;
`;

export const TimeText = styled.Text`
  font-size: ${scale(22)}px;
  font-weight: 600;
  color: #000;
`;

export const CodeText = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 600;
  color: #000;
`;

export const DurationText = styled.Text`
  font-size: ${scale(10)}px;
  font-weight: 600;
  color: #000;
`;

export const FlightImage = styled.Image`
  width: ${scale(128)}px;
  height: ${scale(40)}px;
  resize-mode: contain;
`;

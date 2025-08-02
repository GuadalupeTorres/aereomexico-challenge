import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';

export const TabContainer = styled.View`
  flex-direction: row;
  background-color: white;
  height: ${scale(45)}px;
  align-items: center;
  justify-content: space-evenly;
  padding: ${scale(4)}px;
  margin-horizontal: ${scale(65)}px;
  border-radius: ${scale(4)}px;
  border-width: ${scale(1)}px;
  border-color: #d6d6d6;
  margin-bottom: 16px;
  position: relative;
  bottom: ${scale(22.5)}px;
`;

export const TabTouchable = styled.TouchableOpacity<{ $selected: boolean }>`
  flex: 1;
  font-weight: 600;
  height: ${scale(37)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? Colors.black : 'transparent')};
  border-radius: ${({ $selected }) => ($selected ? scale(4) : 0)}px;
`;

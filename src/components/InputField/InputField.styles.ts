import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';

export const Container = styled.View`
  justify-content: center;
  padding: ${scale(15)}px;
  border-radius: ${scale(12)}px;
  border-width: ${scale(2)}px;
  border-color: ${Colors.black};
`;

export const StyledInput = styled.TextInput`
  font-weight: semibold;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align-vertical: center;
`;
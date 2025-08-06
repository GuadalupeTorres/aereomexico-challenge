import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';

export const Container = styled.View`
  justify-content: center;
  height: 64px;
  padding: 15px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${Colors.black};
`;

export const StyledInput = styled.TextInput`
  height: auto;
  padding: 0px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0px;
  text-align-vertical: center;
  color: ${Colors.black};
`;
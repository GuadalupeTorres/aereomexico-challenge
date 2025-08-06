import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';
import {InputTextProps} from './types'

export const Container = styled.View`
  justify-content: center;
  padding: 15px;
  height: 64px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${Colors.black};
`;
export const InputButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputText = styled.Text<InputTextProps>`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align-vertical: center;
  color: ${({ isPlaceholder }) => (isPlaceholder ? Colors.overlayBlack : Colors.black)};
`;

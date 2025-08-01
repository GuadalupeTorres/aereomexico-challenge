import styled from 'styled-components/native';
import { theme } from '@styles/theme'

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.black};
  padding: ${theme.spacing.medium}px;
  border-radius: 6px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
`;

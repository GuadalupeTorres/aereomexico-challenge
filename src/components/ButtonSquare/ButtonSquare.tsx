import React from 'react';
import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import { ButtonProps } from './types';
import Colors  from '@styles/Colors';

const ButtonSquare: React.FC<ButtonProps> = ({
  size = 'sm',
  black,
  info,
  children,
  onPress,
  containerStyle = {},
  ...props
}) => {
  const width = getBtnSize(size);
   const backgroundColor = black
    ? Colors.black
    : info
    ? Colors.info
    : Colors.black;

  return (
    <ButtonWrapper
      style={[{ width }, containerStyle]}
      backgroundColor={backgroundColor}
      onPress={onPress}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

export default ButtonSquare;

const ButtonWrapper = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))<{
  backgroundColor: string;
  disabled?: boolean;
}>`
  padding: 16px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? Colors.lightGray : backgroundColor};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

function getBtnSize(size: 'sm' | 'md' | 'lg' | 'full' ): number | string {
  const sizes = {
    lg: scale(200),
    md: scale(115),
    sm: scale(50),
    full: '100%',
  };
  return sizes[size];
}

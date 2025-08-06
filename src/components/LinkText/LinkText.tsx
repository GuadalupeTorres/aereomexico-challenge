import React from 'react';
import { StyledText } from './LinkText.styles';
import { LinkTextProps } from './types';
import Colors from '@styles/Colors';

export const LinkText = ({ children, color = Colors.black, underline = true, ...rest }: LinkTextProps) => {
  return (
    <StyledText color={color} underline={underline} {...rest}>
      {children}
    </StyledText>
  );
};
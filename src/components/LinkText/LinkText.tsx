import React from 'react';
import { StyledText } from './LinkText.styles';
import { LinkTextProps } from './types';

export const LinkText = ({ children, color = '#1e90ff', underline = true, ...rest }: LinkTextProps) => {
  return (
    <StyledText color={color} underline={underline} {...rest}>
      {children}
    </StyledText>
  );
};
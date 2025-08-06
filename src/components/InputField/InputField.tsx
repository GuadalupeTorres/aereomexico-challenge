import React from 'react';
import { Container,StyledInput } from './InputField.styles';
import Text from '@components/Text/Text';
import { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
}) => {
  
  return (
    <Container>
      <Text h10 regular black>
        {label}
      </Text>
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default InputField;

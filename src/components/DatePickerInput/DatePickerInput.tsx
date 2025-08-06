import React, { useState } from 'react';
import { Platform, Image, StyleSheet } from 'react-native';

import {
  Container,
  InputButton,
  InputText,
} from './DatePickerInput.styles';
import { DatePickerInputProps } from './types.ts';
import calendar from '@assets/icons/calendar.png';
import DatePicker from 'react-native-date-picker'
import useFlightSearch from '@hooks/useFlightTracking';
import Text from '@components/Text/Text';

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  value,
  mode = 'date',
  display = 'default',
  onChange,
  containerStyle,
}) => {
  const { setDepartureDate, handleDeparture,searchParams } = useFlightSearch();
  const [visible, setVisible] = useState(false);

  const handleSelect = (selectedDate?: Date) => {
    if (!selectedDate) return;
    handleDeparture(selectedDate);
    setDepartureDate(selectedDate);
    setVisible(false);
  };

  const formatDate = () => {
    if (mode === 'time') return value?.toLocaleTimeString();
    return value?.toLocaleDateString();
  };

  return (
    <Container>
      <Text h10 regular black>
        {label}
      </Text>
      <InputButton onPress={() => setVisible(true)}>
        <InputText isPlaceholder={!searchParams?.departureDate}>{searchParams?.departureDate? formatDate(): 'Select a date'}</InputText>
        <Image
          source={calendar}
          style={{
            width: 20,
            height: 20
          }}
        />
      </InputButton>
      {visible && (
        <DatePicker
          modal
          mode='date'
          open={visible}
          date={value}
          onConfirm={(date) => {
            onChange(date);
            handleSelect(date);
          }}
          onCancel={() => {
            setVisible(false)
          }}
        />
      )}
    </Container>
  );
};

export default DatePickerInput;

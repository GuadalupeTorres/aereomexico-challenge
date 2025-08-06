import { ViewStyle } from 'react-native';

export type DatePickerInputProps = {
  label?: string;
  value: Date;
  mode?: 'date' | 'time' | 'datetime';
  icon?: string; 
  display?: 'default' | 'spinner' | 'calendar' | 'compact';
  onChange: (date: Date) => void;
  containerStyle?: ViewStyle;
}

export type InputTextProps = {
  isPlaceholder?: boolean;
}
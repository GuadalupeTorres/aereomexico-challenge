export type ButtonProps = {
 size?: 'sm' | 'md' | 'lg' | 'full';
  black?: boolean;
  info?: boolean;
  containerStyle?: any;
  style?: any;
  children: React.ReactNode;
  disabled?: boolean;
  onPress: () => void;
};
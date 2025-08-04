import { ViewProps, ImageSourcePropType } from 'react-native';

export type ImageComponentProps = {
  source: ImageSourcePropType;
  height?: number;
  width?: number;
  style?: any;
  children?: React.ReactNode;
}

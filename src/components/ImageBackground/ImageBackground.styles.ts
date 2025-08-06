import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const Container = styled.View<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`;
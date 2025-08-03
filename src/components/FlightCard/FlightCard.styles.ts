// FlightCard.styles.ts
import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';

export const FlightCardWrapper = styled.View`
  border-width: 2px;
  border-color: ${Colors.black};
  border-radius: ${scale(12)}px;
  margin-vertical: ${scale(6)}px;
  padding-bottom: ${scale(9)}px;
  background-color: white;
  elevation: 2;
`;

interface LabelProps {
  status: 'arrived' | 'transit' | 'delayed';
}

const getColors = (status: LabelProps['status']) => {
  switch (status) {
    case 'arrived':
      return { bg: 'black', border: 'purple', text: 'white' };
    case 'transit':
      return { bg: Colors.info, border: Colors.info, text: 'white' };
    case 'delayed':
      return { bg: '#FFD700', border: '#FF8C00', text: 'black' };
    default:
      return { bg: 'gray', border: 'darkgray', text: 'white' };
  }
};

export const ArrivedLabel = styled.View<LabelProps>`
  background-color: ${({ status }) => getColors(status).bg};
  padding: 10px 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DashedBorder = styled.View<LabelProps>`
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 14px;
  border-width: 2px;
  border-color: ${({ status }) => getColors(status).border};
  border-style: dashed;
`;

export const SolidBorder = styled.View<LabelProps>`
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 16px;
  border-width: 2px;
  border-color: ${({ status }) => getColors(status).border};
`;

export const LabelText = styled.Text<LabelProps>`
  color: ${({ status }) => getColors(status).text};
  font-weight: bold;
  font-size: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${scale(12)}px;
`;

export const PaddedView = styled.View`
  padding-horizontal: ${scale(16)}px;
`;

export const DividerLine = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${Colors.overlayBlack};
  margin-top: ${scale(10)}px;
`;


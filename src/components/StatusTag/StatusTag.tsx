// components/StatusIndicator.tsx
import React from 'react';
import styled from 'styled-components/native';

interface StatusProps {
    status: 'arrived' | 'transit' | 'delayed';
}

const getColors = (status: StatusProps['status']) => {
    switch (status) {
        case 'arrived':
            return { bg: 'black', border: 'purple', text: 'white', label: 'Arrived' };
        case 'transit':
            return { bg: '#1E90FF', border: '#4682B4', text: 'white', label: 'In Transit' };
        case 'delayed':
            return { bg: '#FFD700', border: '#FF8C00', text: 'black', label: 'Delayed' };
        default:
            return { bg: 'gray', border: 'darkgray', text: 'white', label: 'Unknown' };
    }
};

const Container = styled.View<StatusProps>`
  background-color: ${({ status }) => getColors(status).bg};

  border-bottom-right-radius: 20px;
  border-top-left-radius: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 28px;
`;

const Label = styled.Text<StatusProps>`
  color: ${({ status }) => getColors(status).text};
  font-weight: bold;
  font-size: 11px;
`;

const StatusTag: React.FC<StatusProps> = ({ status }) => (
    <Container status={status}>
        <Label status={status}>{getColors(status).label}</Label>
    </Container>
);

export default StatusTag;


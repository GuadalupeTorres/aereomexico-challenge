// components/StatusIndicator.tsx
import React from 'react';
import styled from 'styled-components/native';
import { StatusProps } from './type';
import Colors from '@styles/Colors';

const getColors = (status: StatusProps['status']) => {
  switch (status) {
    case 'ARRIVED':
      return { bg: Colors.black, border: Colors.black, text: Colors.white, label: 'Arrived' };
    case 'ON_TIME':
      return { bg: Colors.info, border: Colors.info, text: Colors.white, label: 'In Transit' };
    case 'DELAYED':
      return { bg: Colors.warning, border: Colors.warning, text: Colors.black, label: 'Delayed' };
    default:
      return { bg: Colors.black, border: Colors.black, text: Colors.white, label: 'Unknown' };
  }
};

const Container = styled.View<StatusProps>`
  background-color: ${({ status }) => getColors(status).bg};
  border-bottom-right-radius: ${({ isDetail }) =>(isDetail ? '4px' : '20px')};
  border-bottom-left-radius: ${({ isDetail }) =>(isDetail ? '4px' : '0px')};
  border-top-right-radius: ${({ isDetail }) =>(isDetail ? '4px' : '0px')};
  border-top-left-radius: ${({ isDetail }) =>(isDetail ? '4px' : '10px')};
  padding-top: ${({ isDetail }) => (isDetail ? '4px' : '0px')};
  padding-bottom: ${({ isDetail }) => (isDetail ? '4px' : '0px')};
  padding-left: ${({ isDetail }) => (isDetail ? '8px' : '0px')};
  padding-right: ${({ isDetail }) => (isDetail ? '8px' : '0px')};
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

const StatusTag: React.FC<StatusProps> = ({ status,isDetail }) => (

  <Container status={status} isDetail={isDetail}>
    <Label status={status}>{getColors(status).label}</Label>
  </Container>
);

export default StatusTag;


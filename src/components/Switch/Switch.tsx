import styled from 'styled-components/native';
import { Switch, Platform } from 'react-native';
import Colors from '@styles/Colors';
import { scale } from 'react-native-size-matters';

export const SwitchContainer = styled.View`
  transform: scale(0.7);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  ${Platform.OS !== 'android' ? 'border: 1px solid #4CAF50;' : ''}
`;

export const StyledSwitch = styled(Switch).attrs(props => ({
    trackColor: {
        false: '#ccc',
        true: Colors.black,
    },
    thumbColor: props.value ? Colors.white : Colors.white,
}))``;

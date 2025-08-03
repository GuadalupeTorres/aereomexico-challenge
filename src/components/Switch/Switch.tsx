import styled from 'styled-components/native';
import { Switch } from 'react-native';
import Colors from '@styles/Colors';
import { scale } from 'react-native-size-matters';

export const SwitchContainer = styled.View`
  transform: scale(0.70);
  border: 1px solid #4CAF50;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const StyledSwitch = styled(Switch).attrs(props => ({
    trackColor: {
        false: '#ccc',
        true: Colors.black,
    },
    thumbColor: props.value ? Colors.white : Colors.white,
}))``;

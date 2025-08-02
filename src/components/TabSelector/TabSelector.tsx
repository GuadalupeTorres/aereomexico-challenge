import Colors from '@styles/Colors';
import React from 'react';
import Text from '../Text/Text';
import { TabContainer,TabTouchable  } from './TabSelector.styles'

const TabSelector: React.FC<TabSelectorProps> = ({ selectedTab, onSelect }) => (
  <TabContainer>
    <TabTouchable
      $selected={selectedTab === 'flight'}
      onPress={() => onSelect('flight')}
    >
      <Text
        h12
        center
        semibold
        style={{ color: selectedTab === 'flight' ? Colors.white : Colors.black }}
      >
        Flight Number
      </Text>
    </TabTouchable>

    <TabTouchable
      $selected={selectedTab === 'destination'}
      onPress={() => onSelect('destination')}
    >
      <Text
        h12
        center
        semibold
        style={{ color: selectedTab === 'destination' ? Colors.white : Colors.black }}
      >
        Destination
      </Text>
    </TabTouchable>
  </TabContainer>
);

export default TabSelector;

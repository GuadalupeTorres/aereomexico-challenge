type TabSelectorProps = {
  selectedTab: 'flight' | 'destination';
  onSelect: (tab: 'flight' | 'destination') => void;
};
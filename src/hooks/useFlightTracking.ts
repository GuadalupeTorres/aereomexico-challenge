import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useFlightTrackingHook = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [tab, setTab] = useState<'flight' | 'destination'>('flight');
  const navigation = useNavigation();

  const searchFlight = () => {
    navigation.navigate('FlightStatusScreen');
  };

  return {
    flightNumber,
    setFlightNumber,
    departureDate,
    setDepartureDate,
    tab,
    setTab,
    searchFlight,
  };
};

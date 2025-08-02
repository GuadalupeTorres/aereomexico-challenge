import { useState } from 'react';

export const useFlightTrackingHook = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [tab, setTab] = useState<'flight' | 'destination'>('flight');

  const searchFlight = () => {
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

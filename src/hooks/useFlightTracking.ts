import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlightsByRoute, fetchFlightByNumber, setSelectedFlight, setSearchParams } from '@redux/flightSlice';
import { RootState } from '@store';

const useFlightTrackingHook = () => {
  const { flights, loading, selectedFlight, searchParams } = useSelector((state: RootState) => state.flights);
  const dispatch = useDispatch();
  const [flightNumber, setFlightNumber] = useState('');
  const [flightOrigin, setFlightOrigin] = useState('');
  const [flightDestination, setFlightDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [tab, setTab] = useState<'flight' | 'destination'>('flight');
  const navigation = useNavigation();

  const searchByRoute = () => {
    dispatch(setSearchParams({ flightNumber: '', origin: flightOrigin, destination: flightDestination, departureDate: departureDate }));
    dispatch(fetchFlightsByRoute({ flightOrigin, flightDestination, departureDate }));
    navigation.navigate('FlightStatus')
  };

  const searchByNumber = () => {
    dispatch(setSearchParams({ flightNumber: flightNumber, origin: '', destination: '', departureDate: departureDate }));
    dispatch(fetchFlightByNumber(flightNumber, departureDate));
    navigation.navigate('FlightStatus')
  };

  const handleSelectFlight = (flight: any) => {
    dispatch(setSelectedFlight(flight));
  };



  return {
    tab,
    setTab,
    searchByRoute,
    searchByNumber,
    flights,
    loading,
    flightNumber,
    setFlightNumber,
    departureDate,
    setDepartureDate,
    flightOrigin,
    setFlightOrigin,
    flightDestination,
    setFlightDestination,
    selectedFlight,
    handleSelectFlight,
    searchParams
  };
};

export default useFlightTrackingHook;

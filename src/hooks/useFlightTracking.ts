import { useId, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlightsByRoute, fetchFlightByNumber, setSelectedFlight, setSearchParams, toggleFavorite, clearSearchParams } from '@redux/flightSlice';
import { RootState } from '@store';
import { formatDateForParams } from '@utils/date.utils';

const useFlightTrackingHook = () => {
  const { flights, loading, selectedFlight, searchParams } = useSelector((state: RootState) => state.flights);
  const dispatch = useDispatch();
  const [flightNumber, setFlightNumber] = useState('');
  const [flightOrigin, setFlightOrigin] = useState('');
  const [flightDestination, setFlightDestination] = useState('');
  const [departureDate, setDepartureDate] = useState<Date | null>();
  const [tab, setTab] = useState<'flight' | 'destination'>('flight');
  const navigation = useNavigation();

  const searchByRoute = () => {
    const origin = flightOrigin?.toUpperCase();
    const destination = flightDestination?.toUpperCase();
    const departureDate = new Date(searchParams.departureDate);

    dispatch(setSearchParams({
      ...searchParams,
      origin: origin,
      destination: destination
    }));

    dispatch(fetchFlightsByRoute({ origin, destination, departureDate }));
    navigation.navigate('FlightStatus');
  };

  const searchByNumber = () => {
    const departureDate = new Date(searchParams.departureDate);

    dispatch(setSearchParams({
      ...searchParams,
      flightNumber: flightNumber
    }));

    dispatch(fetchFlightByNumber({ flightNumber, departureDate }));
    navigation.navigate('FlightStatus');
  };

  const handleSelectFlight = (flight: any) => {
    dispatch(setSelectedFlight(flight));
  };

  const handleFavorites = (id: any) => {
    dispatch(toggleFavorite(id));
  };

  const handleDeparture = (Date: any) => {
    const convertString = Date.toString();
    dispatch(setSearchParams({
      ...searchParams,
      departureDate: convertString
    }));
  };

  const handleCleanParams = () => {
    dispatch(clearSearchParams());
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
    searchParams,
    handleFavorites,
    handleDeparture,
    handleCleanParams
  };
};

export default useFlightTrackingHook;

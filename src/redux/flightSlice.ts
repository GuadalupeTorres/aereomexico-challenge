import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFlightsByRoute, getFlightByNumber } from '@services/SearchFlightService';

export const fetchFlightsByRoute = createAsyncThunk(
  'flights/byRoute',
  async ({ origin, destination, departureDate }: { origin: string; destination: string, departureDate: any }) => {
    return await getFlightsByRoute(origin, destination, departureDate);
  }
);

export const fetchFlightByNumber = createAsyncThunk(
  'flights/byNumber',
  async ({ flightNumber, departureDate }: { flightNumber: string; departureDate: any }) => {
    return await getFlightByNumber(flightNumber, departureDate);
  }
);

const flightSlice = createSlice({
  name: 'flights',
  initialState: {
    flights: [],
    loading: false,
    error: null,
    selectedFlight: null,
    isFavorite: false,
    searchParams: {
      flightNumber: '',
      origin: '',
      destination: '',
      departureDate: null,
    },
  },
  reducers: {
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    clearSelectedFlight: (state) => {
      state.selectedFlight = null;
    },
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
     clearSearchParams: (state) => {
      state.searchParams = {
        flightNumber: '',
        origin: '',
        destination: '',
        departureDate: null,
      };
    },
    setFlights(state, action) {
      state.flights = action.payload;
    },
    toggleFavorite(state, action) {
      const flight = state.flights.find(f => f.flightId === action.payload);
      if (flight) {
        flight.isFavorite = !flight.isFavorite;
        state.flights = [...state.flights].sort((a, b) =>
          Number(b.isFavorite) - Number(a.isFavorite)
        );
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFlightsByRoute.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlightByNumber.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlightsByRoute.fulfilled, (state, action) => {
        state.flights = action.payload.map(flight => ({
          ...flight,
          isFavorite: false,
          flightId: `${flight.segment.operatingCarrier}_${flight.segment.operatingFlightCode}_${flight.segment.departureDateTime}`,
        }));
        state.loading = false;
      })
      .addCase(fetchFlightByNumber.fulfilled, (state, action) => {
        state.flights = action.payload.map(flight => ({
          ...flight,
          isFavorite: false,
          flightId: `${flight.segment.operatingCarrier}_${flight.segment.operatingFlightCode}_${flight.segment.departureDateTime}`,
        }));
        state.loading = false;
      });
  },
});
export const { 
  setSelectedFlight, 
  clearSelectedFlight, 
  setSearchParams, 
  setFlights, 
  toggleFavorite,
  clearSearchParams 
} = flightSlice.actions;

export default flightSlice.reducer;

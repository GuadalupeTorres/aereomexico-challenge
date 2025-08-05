// redux/flightSlice.ts
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
  async (flightNumber: string, departureDate: any) => {
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
    searchParams: {
      flightNumber: '',
      origin: '',
      destination: '',
      departureDate: '',
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
        state.flights = action.payload;
        state.loading = false;
      })
      .addCase(fetchFlightByNumber.fulfilled, (state, action) => {
        state.flights = action.payload;
        state.loading = false;
      });
  },
});
export const { setSelectedFlight, clearSelectedFlight, setSearchParams } = flightSlice.actions;

export default flightSlice.reducer;

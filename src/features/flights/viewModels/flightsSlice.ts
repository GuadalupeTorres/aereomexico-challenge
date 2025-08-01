import { createSlice } from '@reduxjs/toolkit';

const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    list: [],
    selectedId: null,
    isLoading: false
  },
  reducers: {
    setFlights: (state, action) => {
      state.list = action.payload;
    },
    selectFlight: (state, action) => {
      state.selectedId = action.payload;
    }
  }
});

export const { setFlights, selectFlight } = flightsSlice.actions;
export default flightsSlice.reducer;

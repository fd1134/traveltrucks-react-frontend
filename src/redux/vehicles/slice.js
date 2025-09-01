import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./operations";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    list: [],
    total: 0,
    selected: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearVehicles(state) {
      state.list = [];
      state.total = 0;
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearVehicles } = vehiclesSlice.actions; 
export default vehiclesSlice.reducer;
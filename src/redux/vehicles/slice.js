import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./vehiclesOperations";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    list: [],
    selected: null,
    isLoading: false,
    error: null,
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
        state.list = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default vehiclesSlice.reducer;
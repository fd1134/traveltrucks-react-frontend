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
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        console.log("FETCH FULFILLED PAYLOAD:", action.payload); // ✅ API’den gelen veri
        state.isLoading = false;
        state.error = null;
        state.list = action.payload.items; // array olarak saklanıyor
        state.total = action.payload.total;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default vehiclesSlice.reducer;

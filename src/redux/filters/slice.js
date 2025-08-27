import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    priceRange: [0, 20000],
    rating: 0,
    transmission: "all",
  },
  reducers: {
    setLocation: (state, action) => { state.location = action.payload; },
    setPriceRange: (state, action) => { state.priceRange = action.payload; },
    setRating: (state, action) => { state.rating = action.payload; },
    setTransmission: (state, action) => { state.transmission = action.payload; },
    resetFilters: (state) => {
      state.location = "";
      state.priceRange = [0, 20000];
      state.rating = 0;
      state.transmission = "all";
    },
  },
});
export const { setLocation, setPriceRange, setRating, setTransmission, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
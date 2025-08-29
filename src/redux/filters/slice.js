import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    features: [],
    form: "",
    location: "",
  },
  reducers: {
    setForm: (state, action) => { state.form = action.payload; },
    setLocation: (state, action) => { state.location = action.payload; },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter(f => f !== feature);
      } else {
        state.features.push(feature);
      }
    },
    resetFilters: (state) => {
      state.form = "";
      state.location = "";
      state.features = [];
    },
  },
});

export const { setForm, setLocation, toggleFeature, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
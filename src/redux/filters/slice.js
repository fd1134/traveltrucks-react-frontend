import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    features: [],
    form: "",
    location: "",
    transmission: "manual",
  },
  reducers: {
    changeFilter(state, action) {
      state.form = action.payload.form;
      state.location = action.payload.location;
      state.features = action.payload.features;
      state.transmission = action.payload.transmission;
    },
  },
});

export const { changeFilter } = slice.actions;
const filtersReducer = slice.reducer;
export default filtersReducer;
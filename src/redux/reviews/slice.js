import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./reviewsOperations";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    byVehicle: {},
    status: "idle",
    error: null,
  },
  reducers: {
    addReview: (state, action) => {
      const { vehicleId, review } = action.payload;
      if (!state.byVehicle[vehicleId]) {
        state.byVehicle[vehicleId] = [];
      }
      state.byVehicle[vehicleId].push(review);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.byVehicle[action.payload.vehicleId] = action.payload.reviews;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
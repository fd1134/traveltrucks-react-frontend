import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (vehicleId) => {
    const res = await fetch(`https://example.com/api/vehicles/${vehicleId}/reviews`);
    return { vehicleId, reviews: await res.json() };
  }
);
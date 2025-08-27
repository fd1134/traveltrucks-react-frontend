import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    const res = await fetch("https://example.com/api/vehicles");
    return await res.json();
  }
);
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/axios';
import { clearVehicles } from "./slice";

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async (filters = {}, thunkAPI) => {
    try {
      
      thunkAPI.dispatch(clearVehicles());

      const params = {};
      if (filters.location) params.location = filters.location;
      if (filters.form) params.form = filters.form;
      if (filters.features?.length) {
        filters.features.forEach((f) => {
          params[f] = true;
        });
      }

      const response = await instance.get("/campers", { params });
      return {
        items: response.data,     
        total: response.data.length,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
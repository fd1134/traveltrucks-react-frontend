import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/axios';

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    const res = await instance.get(`/campers`);
    return await res.data;
  }
);

export const fetchVehicleDetails = createAsyncThunk(
  'vehicles/fetchById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`/campers/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
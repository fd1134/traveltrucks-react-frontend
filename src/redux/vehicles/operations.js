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
          if (f !== "automatic") {
            params[f] = true;
          }
        });
      }

      if (filters.transmission) {
        params.transmission = filters.transmission;
      }

      const response = await instance.get("/campers", { params });

      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (error) {
      // Axios error kontrolü
      if (error.response) {
        // API'den dönen hata (örn. 404)
        return thunkAPI.rejectWithValue(error.response.data?.message || "Not found");
      }
      // Diğer hatalar (network vs.)
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

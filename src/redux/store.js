import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehicles/vehiclesSlice";
import reviewsReducer from "./reviews/reviewsSlice";
import filtersReducer from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    reviews: reviewsReducer,
    filters: filtersReducer,
  },
});
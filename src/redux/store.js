import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehicles/vehiclesSlice";
import reviewsReducer from "./reviews/reviewsSlice";
import filtersReducer from "./filters/filtersSlice";
import favouritesReducer from "./favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    reviews: reviewsReducer,
    filters: filtersReducer,
     favourites: favouritesReducer
  },
});
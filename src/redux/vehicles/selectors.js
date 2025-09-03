// redux/vehicles/selectors.js
import { createSelector } from "@reduxjs/toolkit";
import { selectFavourites } from "../favourites/selectors";

export const selectVehicles = (state) => state.vehicles.list;
export const selectVehicle = (state) => state.vehicles.selected;
export const selectVehiclesStatus = (state) => state.vehicles.isLoading;
export const selectVehiclesError = (state) => state.vehicles.error;
export const selectVehiclesTotal = (state) => state.vehicles.total;

export const selectFavouriteVehicles = createSelector(
  [selectVehicles, selectFavourites],
  (vehicles, favouriteIds) => vehicles.filter((v) => favouriteIds.includes(v.id))
);

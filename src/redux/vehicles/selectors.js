import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";
import { selectFavourites } from "../favourites/selectors";

export const selectVehicles = (state) => state.vehicles.list;
export const selectVehicle = (state) => state.vehicles.selected;
export const selectVehiclesStatus = (state) => state.vehicles.isLoading;
export const selectVehiclesError = (state) => state.vehicles.error;
export const selectVehiclesTotal = (state) => state.vehicles.total;

export const selectFilteredVehicles = createSelector(
  [selectVehicles, selectFilters],
  (vehicles, filters) => {
    return vehicles.filter((v) => {
      const matchesLocation = filters.location
        ? v.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const matchesForm = filters.form
        ? v.form.toLowerCase() === filters.form.toLowerCase()
        : true;

      const matchesFeatures =
        filters.features.length > 0
          ? filters.features.every((f) => v[f] === true)
          : true;

      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);

export const selectFavouriteVehicles = createSelector(
  [selectFilteredVehicles, selectFavourites],
  (filteredVehicles, favouriteIds) => {
    return filteredVehicles.filter((v) => favouriteIds.includes(v.id));
  }
);

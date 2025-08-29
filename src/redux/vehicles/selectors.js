import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/filtersSelectors";
import { selectFavourites } from "../favourites/favouritesSelectors";
export const selectVehicles = (state) => state.vehicles.list;
export const selectVehicle = (state) => state.vehicles.selected;
export const selectVehiclesStatus = (state) => state.vehicles.isLoading;
export const selectVehiclesError = (state) => state.vehicles.error;

export const selectFilteredVehicles = createSelector(
  [selectVehicles, selectFilters],
  (vehicles, filters) => {
    return vehicles.filter((v) => {
      const matchesLocation = filters.location
        ? v.location.includes(filters.location)
        : true;
      const matchesForm = filters.form ? v.form === filters.form : true;
      const matchesFeatures =
        filters.features.length > 0
          ? filters.features.every((f) => v[f])
          : true;
      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);

// Filtre + favori araç kombinasyonu
export const selectFavouriteVehicles = createSelector(
  [selectFilteredVehicles, selectFavourites],
  (filteredVehicles, favouriteIds) => {
    return filteredVehicles.filter((v) => favouriteIds.includes(v.id));
  }
);



export const selectReviewsByVehicle = (vehicleId) => (state) =>
  state.reviews.byVehicle[vehicleId] || [];

export const selectReviewsStatus = (state) => state.reviews.status;
export const selectReviewsError = (state) => state.reviews.error;
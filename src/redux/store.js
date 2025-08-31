import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};


import  filtersReducer  from './filters/slice';
import  favouritesReducer  from './favourites/slice';
import vehiclesReducer from "./vehicles/slice";



export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
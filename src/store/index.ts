import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./reducers";
import { useDispatch as useReduxDispatch } from "react-redux";
import {
  persistStore,
  persistReducer,
  createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const migrations = {
  0: (state: any) => ({ ...state }),
};

const persistConfig = {
  key: "root",
  version: 0,
  migrate: createMigrate(migrations, { debug: true }),
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middlewares = [];
// add logger middleware when app is running in debug mode
if (__DEV__) {
  middlewares = [logger];
}

export const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__ === true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export * from "./thunks/categoriesThunks";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const persistor = persistStore(store);

export {
  initializeSelectedColors,
  setSelectedColors,
  initializeSelectedBrands,
  setSelectedBrands,
  setMinPrice,
  setMaxPrice,
  reset,
} from "./slices/filterArticlesSlice";

export {
  initializeSelectedColorsSubArticles,
  setSelectedColorsSubArticles,
  initializeSelectedBrandsSubArticles,
  setSelectedBrandsSubArticles,
  setMinPriceSubArticles,
  setMaxPriceSubArticles,
  resetSubArticles,
} from "./slices/filterSubArticlesSlice";

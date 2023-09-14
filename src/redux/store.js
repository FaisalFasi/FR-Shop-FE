import cartReducer from "./cartReducer";
// const stripe = require("stripe")(
//   "sk_test_51NgTlNLMYb3slf8ZVEZD0dzMHD8pjcfQJFjIrqNBJZpchMzrzw50coQsO8kyaNNcQrDcCFs8EapX1vTaL9Fv2v4b00JC9Jm4tD"
// );
import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

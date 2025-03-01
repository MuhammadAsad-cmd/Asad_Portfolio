import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { sidebarReducer } from "./sidebarSlice";
import { themeReducer } from "./themeSlice";
import { combineReducers } from "redux";

// Persist configuration for theme
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"], // Persist only theme state
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for Redux Persist
    }),
});

export const persistor = persistStore(store);
export default store;

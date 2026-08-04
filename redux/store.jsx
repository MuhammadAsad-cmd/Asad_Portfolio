import { configureStore } from "@reduxjs/toolkit";
import { sidebarReducer } from "./sidebarSlice";
import { themeReducer } from "./themeSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

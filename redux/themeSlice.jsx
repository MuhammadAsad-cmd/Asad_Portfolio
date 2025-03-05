import { createSlice } from "@reduxjs/toolkit";

// Detect system theme on first load
const prefersDark =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState = {
  isDark: prefersDark,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDark: (state, action) => {
      state.isDark = action.payload;
    },
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { setDark, toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

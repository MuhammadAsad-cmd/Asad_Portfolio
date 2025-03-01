import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
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
